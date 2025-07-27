import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConst'

const GptSearchBar = () => {
    const langKey = useSelector((store: any) => store.config.lang)
    return (
        <>
            <div className="px-4 md:px-12 py-3 text-white text-center w-full ">
                <h1 className="text-3xl md:text-5xl mb-3 font-bold">{lang[langKey].searchPageH1Text}</h1>
                <p className="text-gray-400 text-sm md:text-lg">{lang[langKey].searchPageSmallText}</p>
            </div>
            <div className="px-4 md:px-36 py-3 sticky top-[68px] z-[99999] pt-10"
            //   style={{ background: `rgba(20, 20, 20, ${searchOpacity})` }}
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