import React , {useEffect , useState} from 'react'
import Axios from 'axios'
export default function PopularMovies() {
    useEffect(()=>{
        Axios.get(`https://api.themoviedb.org/3/movie/${peopleID.id}?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US`)
        .then((res)=>{
            console.log(res);
        })
        .catch((error)=>{
            console.log(error);
        })
    } , [])
  return (
    <div>
        
    </div>
  )
}
