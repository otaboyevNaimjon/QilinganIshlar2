import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
// import './StyleBtn.css'


const Main = () => {
  const [searchValue, setSearchValue] = useState(null)

  function searchFunction() {

  }
  return (
    <div className='container'>
        <div className='background__img'>
          <h1 style={{color:'white', marginTop:"80px"}}>Welcome.</h1>
          <h4 style={{color:'white',}}>Millions of movies, TV shows and people to discover. Explore now.</h4>
          <div className="d-flex">
            <input className="form-control my-3 w-70" style={{ position: "relative" }} onInput={(item) => { setSearchValue(item.target.value) }}  type="text"  placeholder='Search for a movie, tv show, person......' />
            <Link   style={{ textDecoration: "none",}} to={`/SearchFunc/${searchValue}`}><Button style={{ color: "white" , backgroundColor:"rgb(82, 188, 82)" , height:"38px", marginLeft:"-50px", borderRadius:"20px" }} className='mt-3 BtnLink' onClick={() => { searchFunction() }}>Search</Button></Link>
          </div>
        </div>
      </div>
  
  );
}

export default Main;

// import React, { useEffect } from 'react';
// import { useParams , Link} from 'react-router-dom';
// import axios from 'axios'
// import { useState } from 'react';
// const SearchFunc = (props) => {
//     const [dataSearch, setDataSearch] = useState([])
//     const search = useParams()
//     useEffect(() => {
//         console.log(search);
//         axios.get(https://api.themoviedb.org/3/search/movie?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US&query=${search.search}&page=1&include_adult=false)
//             .then((res) => {
//                 setDataSearch(res.data.results)
//                 console.log(res.data.results);
//             })
//     }, []);
//     return (
//         <div>
//             {
//                 (dataSearch.length > 0) ?
//                     <div className='container'>
//                         {
//                             dataSearch.map((arr, i) => {
//                                 return (
//                                     <div className=' w-100 border-2'>
//                                         <Link style={{textDecoration:"none" , color:"black"}} to={/people/${arr.id}/${arr.title}}>
//                                         <div className="w-100 d-flex mt-3" style={{ borderRadius: "10px", border: "1px solid black" }}>
//                                             <img style={{ borderRadius: "10px" }} src={"https://image.tmdb.org/t/p/w500" + arr.backdrop_path} alt={arr.title} />
//                                             <div style={{marginLeft:"20px"}}>
//                                                 <h1>{arr.title}</h1>
//                                                 <span>Aprel</span>
//                                                 <br /><br />
//                                                 <p>{arr.overview}</p>
//                                             </div>
//                                         </div>
//                                         </Link>
//                                     </div>
//                                 )
//                             })
//                         }
//                     </div>
//                     :
//                     <>
//                         <h1>Loading...</h1>
//                     </>
//             }
//         </div>
//     );
// }

// export default SearchFunc;