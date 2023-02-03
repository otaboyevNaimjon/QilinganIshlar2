import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Popular from './Pages/Popular';
import Singlemovies from './Components/Themovie/Singlemovies';
import NowPlaying from './Pages/NowPlaying';
import Upcomming from './Pages/Upcomming';
import TopRated from './Pages/TopRated';
import Ontv from './Pages/Ontv';
import AiringToday from './Pages/AiringToday';
import PopularPeople from './Components/Themovie/PopularPeople/PopularPeople';
import SinglePeople from './Components/Themovie/PopularPeople/SinglePeople';
import PeopleTitle from './Components/Themovie/PeopleTitle/PeopleTitle';
import Search from './Components/Themovie/Search/Search'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Singlemovies />} />
          <Route path='/SearchFunc/:searchValue' element={<Search />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/NowPlaying' element={<NowPlaying />} />
          <Route path='/upcoming' element={<Upcomming />} />
          <Route path='/toprated' element={<TopRated />} />
          <Route path='/ontv' element={<Ontv />} />
          <Route path='/airingtoday' element={<AiringToday />} />
          <Route path='/popularpeople' element={<PopularPeople />} />
          <Route path='/popularpeople/:id' element={<SinglePeople />} />
          <Route path='/title/:id' element={<PeopleTitle />} />
          <Route path='/title/:id' element={<PeopleTitle/>}/> 
          <Route path='/singlemovies' element={<Singlemovies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
