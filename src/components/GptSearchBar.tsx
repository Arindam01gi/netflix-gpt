import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConst'
import { InferenceClient } from '@huggingface/inference';
import OpenAI from 'openai';

const GptSearchBar = () => {
    const langKey = useSelector((store: any) => store.config.lang)
    const serachText = useRef<HTMLInputElement>(null)

    const handleGPTSearchClick = async () => {
        const query = serachText.current?.value
        if (!query) return;

        const HUGGING_FACE_KEY = import.meta.env.VITE_HUGGING_FACE_KEY
         const openai = new OpenAI({
            apiKey: HUGGING_FACE_KEY, // Use your Hugging Face API key here
            baseURL: "https://router.huggingface.co/v1", // Hugging Face's OpenAI-compatible endpoint
            dangerouslyAllowBrowser: true, // Required for client-side API calls
        });

        // Construct the prompt for the Hugging Face model
        const hfPrompt = "Act as a Movie Recommendation System and suggest some movies for the query: " + query + ". Provide only 5 movie names, comma separated like the example: Andaaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan";
    

        try{
            const chatCompletion = await openai.chat.completions.create({
                messages: [{ role: 'user', content: hfPrompt }],
                model: 'google/gemma-2-2b-it', // Specify the model here
                temperature: 0.7,
                max_tokens: 100, // Limit the output length
            });

            console.log(chatCompletion)

        }catch(error) {
            console.error("Error with Hugging Face API or movie search:", error);
        }

    } 
    return (
        <>
            <div className="px-4 md:px-12 py-3 text-white text-center w-full ">
                <h1 className="text-3xl md:text-5xl mb-3 font-bold">{lang[langKey].searchPageH1Text}</h1>
                <p className="text-gray-400 text-sm md:text-lg">{lang[langKey].searchPageSmallText}</p>
            </div>
            <div className="px-4 md:px-36 py-3 sticky top-[68px] z-[99999] pt-10"
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