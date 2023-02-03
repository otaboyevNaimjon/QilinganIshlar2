import React, { useEffect } from 'react';
import { useParams , Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
const SearchFunc = () => {
    const [dataSearch, setDataSearch] = useState([])
    const search = useParams()
    useEffect(() => {
        // console.log(search);
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US&query=${search.searchValue}&page=1&include_adult=false`)
            .then((res) => {
                setDataSearch(res.data.results)
                console.log(res.data.results);
            })
            .catch((error)=>{
                console.log(error);
            })
    }, []);
    return (
        <div>
            {
                (dataSearch.length > 0) ?
                    <div className='container'>
                        {
                            dataSearch.map((arr, i) => {
                                return (
                                    <div className=' w-100 border-2 mt-5 pt-5'>
                                        <Link style={{textDecoration:"none" , color:"black"}} to={`/movie/${arr.id}/${arr.title}` }>
                                        <div className="w-100 d-flex mt-3" style={{ borderRadius: "10px", border: "1px solid black" }}>
                                            <img style={{ borderRadius: "10px" }} src={"https://image.tmdb.org/t/p/w500" + arr.backdrop_path} alt={arr.title} />
                                            <div style={{marginLeft:"20px"}}>
                                                <h1>{arr.title}</h1>
                                                <br /><br />
                                                <p style={{fontSize:"28px"}}>{arr.overview}</p>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <>
                        <h1> <CircularProgress /></h1>
                    </>
            }
        </div>
    );
}

export default SearchFunc;