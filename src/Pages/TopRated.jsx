import React from 'react'
import Themovie from '../Components/Themovie/Themovie'
export default function TopRated() {
  return (
    <div>
        <Themovie api="https://api.themoviedb.org/3/movie/top_rated?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US&page=1"/>
    </div>
  )
}
