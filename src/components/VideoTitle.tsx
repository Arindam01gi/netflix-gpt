import React from 'react'

const VideoTitle = ({ original_title, overview }: { original_title: string, overview: string }) => {
    return (
        <div className='flex flex-col justify-center absolute text-white bg-gradient-to-b from-black w-full aspect-video'>
            <p className='text-3xl px-36 font-extrabold'>{original_title}</p>
            <p className='text-lg  px-36 w-3/4 pt-6'>{overview}</p>
            <div className='px-36 pt-6 gap-4 flex '>
                <button className='bg-white px-12 py-3 text-lg font-semibold rounded-md shadow-md  text-black hover:opacity-60 cursor-pointer'> <i className="fa-solid fa-play mr-3"></i>Play</button>
                <button className='bg-gray-500 px-8 py-3 text-lg rounded-md shadow-md text-white opacity-50 flex items-center '>
                    <span className='mr-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                    </span> More info</button>
            </div>
        </div>
    )
}

export default VideoTitle