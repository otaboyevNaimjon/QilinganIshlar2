import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './Themovi.css'
import CircularProgress from '@mui/material/CircularProgress';
import { BsChevronRight } from 'react-icons/bs'
import Progress from './Progress/Progress'
import { Link } from 'react-router-dom';

export default function Themovie(props) {
  let image = 'https://image.tmdb.org/t/p/w500'
  const [moviesData, setmoviesData] = useState([])
  useEffect(() => {
    Axios.get(props.api)
      .then((responsive) => {
        console.log(responsive);
        setmoviesData([...responsive.data.results])
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  return (
    <div className='d-flex'>
      <div style={{ marginTop: "100px" }} >
        <h2>Popular Movies</h2>
        <div className='popular__div'>
          <h3 style={{ marginLeft: "15px" }}>Sort</h3>
          <BsChevronRight style={{ fontSize: "15px", marginTop: "5px", marginRight: "15px" }} />
        </div>
        <div className='popular__div'>
          <h3 style={{ marginLeft: "15px" }}>Filters</h3>
          <BsChevronRight style={{ fontSize: "15px", marginTop: "5px", marginRight: "15px" }} />
        </div>
        <div className='popular__div'>
          <h3 style={{ marginLeft: "15px" }}>Where To Watch</h3>
          <BsChevronRight style={{ fontSize: "15px", marginTop: "5px", marginRight: "15px" }} />
        </div>
        <div className='h3'>
          <h3>Search</h3>
        </div>
      </div>
      <div className='cards container' style={{ marginTop: '80px' }}>
        {
          (moviesData.length > 0) ?
            <>
              {
                moviesData.map((arr, index) => {
                  console.log(arr);
                  return (
                    <Link style={{ textDecoration: "none", color: "black" }} to={`/title/${arr.id}`} >
                      <div key={index} className="row " >
                        <div className="col-3">
                          <div className="card">
                            <img src={image + arr.poster_path} alt={arr.name} />
                            <div style={{ marginTop: "-30px", marginLeft: "-200px" }}>
                              <Progress vote_average={arr.vote_average} />
                            </div>
                            <h3>{arr.original_title}</h3>
                            <p>{arr.release_date}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })
              }
            </>
            :
            <><CircularProgress /></>
        }
      </div>
      <div className='loadMore'>
        <h1>Load More</h1>
      </div>
    </div>

  )
}
