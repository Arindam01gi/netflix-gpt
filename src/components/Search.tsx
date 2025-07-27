import React from 'react'
import Header from './Header'
import GptSearchBar from './GptsearchBar'

const Search = () => {
  return (
    <div className="search-page pt-36">
      <div className={`bg-skin w-full h-2/3 absolute top-0 -z-0 bg-gradient-to-b from-indigo-800 to-black transition-colors`}
      //  style={{ opacity: `${skinOpacity}` }}
       ></div>
      <div className="search relative">
        <GptSearchBar
        // searchOpacity={searchOpacity}
         />
        <div className="mt-3 px-4 md:px-12 py-3 min-h-[700px]">
          {/* <SearchResult /> */}
        </div>
      </div>
    </div>

  )
}

export default Search