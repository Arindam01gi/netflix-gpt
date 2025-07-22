import React from 'react'

const VideoTitle = ({ original_title, overview }: { original_title: string, overview: string }) => {
    return (
        <div className='flex flex-col justify-center '>
            <p className='text-3xl px-36 font-extrabold'>{original_title}</p>
            <p className='text-lg  px-36 w-3/4 pt-6'>{overview}</p>
            <div className='px-36 pt-6 gap-4 flex '>
                <button className='bg-gray-200 px-12 py-3 text-lg font-semibold rounded-md shadow-md '> <i className="fa-solid fa-play mr-3"></i>Play</button>
                <button className='bg-gray-500 px-8 py-3 text-lg rounded-md shadow-md text-white opacity-80 '> <i className="fa fa-circle-info mr-3 "></i>More info</button>
            </div>
        </div>
    )
}

export default VideoTitle