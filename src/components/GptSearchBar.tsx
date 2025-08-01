import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConst'
import { InferenceClient } from '@huggingface/inference';
import OpenAI from 'openai';
import { API_OPTIONS } from '../utils/constant'
import { addGptMovieResult } from '../store/gptSlice';

const GptSearchBar = () => {
    const langKey = useSelector((store: any) => store.config.lang)
    const serachText = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()

    const handleGPTSearchClick = async () => {
        const query = serachText.current?.value
        if (!query) return;

        const VITE_OPEN_ROUTER_KEY = import.meta.env.VITE_OPEN_ROUTER_KEY
        const openai = new OpenAI({
            apiKey: VITE_OPEN_ROUTER_KEY,
            baseURL: "https://openrouter.ai/api/v1",
            dangerouslyAllowBrowser: true,
        });

        // Construct the prompt for the Hugging Face model
        const llmPrompt = "Act as a Movie Recommendation System and suggest some movies for the query: " + query + ". Provide only 5 movie names, comma separated like the example: Andaaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan";


        try {
            const chatCompletion = await openai.chat.completions.create({
                messages: [{ role: 'user', content: llmPrompt }],
                model: "deepseek/deepseek-chat-v3-0324:free"
            });

            console.log(chatCompletion)
            const llmMovieNames = chatCompletion.choices[0].message.content;
            const movieNamesArray = llmMovieNames?.split(',').map(name => name.trim()) || []
            const moviePromises = movieNamesArray.map(movie => searchMovieTMDB(movie))
            const tmdbResults = await Promise.all(moviePromises)
            dispatch(addGptMovieResult({movieNames:llmMovieNames , movieResults:tmdbResults}))
        } catch (error) {
            console.error("Error with Hugging Face API or movie search:", error);
        }

    }

    const searchMovieTMDB = async (movie: string) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/multi?query=${movie}&include_adult=false&language=en-US&page=1`,
                API_OPTIONS
            )
            if (!response.ok) {
                throw new Error(`TMDB API error: ${response.statusText}`);
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error("Error searching TMDB for", movie, ":", error);
            return [];
        }
    }
    const handleCrossButton = () => {
        if (serachText.current) {
            serachText.current.value = "";
        }
    }
    return (
        <>
            <div className="px-4 md:px-12 py-3 text-white text-center w-full ">
                <h1 className="text-3xl md:text-5xl mb-3 font-bold">{lang[langKey].searchPageH1Text}</h1>
                <p className="text-gray-400 text-sm md:text-lg">{lang[langKey].searchPageSmallText}</p>
            </div>
            <div className="px-4 md:px-36 py-3 sticky top-[68px] z-20 pt-10"
            >
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="flex gap-1 ">
                        <div className="text-white relative w-full">
                            <span className='icon-fill text-gray-400 text-[22px] md:mt-0 md:text-[36px] absolute left-4 top-[16px] md:top-5 hidden md:block'>
                                {/* <SearchOutlinedIcon style={{ fontSize: '32px' }} /> */}
                            </span>
                            <input
                                type="text"
                                placeholder={lang[langKey].gptSearchPlaceHolder}
                                ref={serachText}
                                className={`py-4 md:py-6 pl-4 pr-12 md:px-14 w-full bg-gray-600 bg-opacity-70 rounded focus:bg-opacity-100 focus-visible:outline-none text-lg`}
                            />

                            {
                                <p className='icon-fill text-[28px] mt-0 md:text-[36px] absolute right-3 top-3 md:top-2 cursor-pointer'
                                    onClick={handleCrossButton}
                                >
                                    <span className='p-3'>
                                        <i className="fa fa-times fa-sm text-white" aria-hidden="true"></i>
                                    </span>
                                </p>}
                        </div>
                        <button
                            className={`py-4 md:py-6 w-24 px-2 md:px-32 flex items-center justify-center bg-purple-800 rounded text-white disabled:bg-purple-800 text-xl cursor-pointer text-nowrap`}
                            onClick={handleGPTSearchClick}
                        >
                            <i className="fa-solid fa-wand-magic-sparkles mr-3"></i>
                            {lang[langKey].serach}
                        </button>
                    </div>
                    <p className='text-xs mt-1 text-slate-500'>
                        Note: Movie recommendations powered by GPT are available on request due to paid APIs.
                        <a href="" target="_blank" rel="noreferrer" className='ml-2 text-sm text-gray-400 hover:text-gray-200'>Request now</a>
                    </p>
                </form>
            </div>
        </>
    )
}

export default GptSearchBar