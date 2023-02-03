import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
export default function PopularPeople() {
    let image = 'https://image.tmdb.org/t/p/w500'
    const [people, setpeople] = useState([])
    useEffect(() => {
        Axios.get("https://api.themoviedb.org/3/person/popular?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US&page=1")
            .then((responsive) => {
                console.log(responsive);
                setpeople([...responsive.data.results])
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    return (
        <div>
            <div>
                <h2 style={{ marginTop: "90px" }}>Popular People</h2>
                <div style={{ display: "flex" }}>
                    {
                        (people.length > 0) ?
                            <div className='row'>
                                {
                                    people.map((arr, index) => {
                                        return (
                                            <Link style={{textDecoration:"none", color:"black"}} className="col-3" to={`/popularpeople/${arr.id}`}> 
                                                <div className='people'>
                                                    <div key={index} className="row">
                                                        <div className="col-3">
                                                            <div className="card">
                                                                <img src={image + arr.profile_path} alt="" />
                                                                <h2>{arr.name}</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            :
                            <div><CircularProgress /></div>
                    }
                </div>
            </div>
        </div >
    )

}


