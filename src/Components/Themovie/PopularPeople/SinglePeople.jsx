import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import { height } from '@mui/system';
import { FaFacebookSquare } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
export default function SinglePeople() {
    let peopleId = useParams()
    let image = 'https://image.tmdb.org/t/p/w500'
    const [peopleData, setpeopleData] = useState(null)
    const [peoplsData, setPeoplsData] = useState([])


    useEffect(() => {
        Axios.get(`https://api.themoviedb.org/3/person/${peopleId.id}?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US`)
            .then((responsive) => {
                console.log(responsive.data);
                setpeopleData(responsive.data)
            })
            .catch((error) => {
                console.log(error);
            })

        Axios.get(`https://api.themoviedb.org/3/person/${peopleId.id}/movie_credits?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US`)
            .then((res) => {
                console.log(res.data.cast);
                setPeoplsData(res.data.cast)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])


    return (
        <div>
            {
                (peopleData) ?
                    <div className='people_card'> 
                        <div className='col-3'>
                            <img style={{ width: "300px", marginTop: "100px", marginLeft: "50px", borderRadius: "20px" }} src={image + peopleData.profile_path} alt="" />
                            <div className='mx-5 fs-5 mt-3' >
                                <FaFacebookSquare style={{ fontSize: "30px" }} />
                                <BsTwitter style={{ marginLeft: "15px", fontSize: "30px" }} />
                                <GrInstagram style={{ marginLeft: "15px", fontSize: "30px" }} />
                            </div>
                            <div>
                                <h3>Personal Info</h3>
                                <h4>Known For</h4>
                                <h6>{peopleData.known_for_department}</h6>
                                <h4>Known Credits</h4>
                                <p>{peopleData.popularity}</p>
                                <h4>Birthday</h4>
                                <h6>{peopleData.birthday}</h6>
                                <h4>Place of Birth</h4>
                                <h6>{peopleData.place_of_birth}</h6>
                                <h4>Also Known As</h4>
                                {
                                    peopleData.also_known_as.map((arr, index) => {
                                        console.log(peopleData.also_known_as);
                                        return (
                                            <div key={index}>
                                                <h4>{arr.also_known_as}</h4>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div style={{ marginTop: "100px", marginLeft: "20px" }} className="col-6" >
                            <h1>{peopleData.name}</h1>
                            <h2>Biography</h2>
                            <p>{peopleData.biography}</p>
                            <h2>Known For</h2>
                            <div className='' style={{ height: "290px", width: "63vw", marginLeft: "10px", overflow: "auto", }}>
                                {
                                    (peoplsData.length > 0) ?
                                        <div style={{ display: "flex" }}>
                                            {
                                                peoplsData.map((arr, index) => {
                                                    return (
                                                        <Link key={index} style={{ color: "black", textDecoration: "none" }} to={`/popularpeople/${arr.id} /${arr.character}`}>
                                                            <div className='card' style={{ width: "250px", height: "230px", textAlign: "center" }}>
                                                                <img className='images' width={"160px"} src={image + arr.backdrop_path} alt='' />
                                                                <p>{arr.character}</p>
                                                            </div>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                        :
                                        <><CircularProgress /></>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <CircularProgress />
                    </div>
            }
        </div >
    )
}
