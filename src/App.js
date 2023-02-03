import logo from './logo.svg';
import './App.css';
// import Themovie from './Companentes/Themovie/Themovie';
// import Singlemovies from './Companentes/Themovie/Singlemovies';
import {Outlet} from 'react-router-dom'
import Navbar from './Components/Themovie/Navbar/Navbar'
import Footer from './Components/Themovie/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
