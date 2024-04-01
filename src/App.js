
import  './App.css';
//import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from 'react-router-dom';

import PlayPage from './pages/PlayPage';
import MoviePage from './pages/MoviePage';
import HomePage from './pages/HomePage';
//
//axios.defaults.baseURL="https://api.themoviedb.org/3";
//axios.defaults.params={};
//axios.defaults.params["api_key"]="3f613ae2d81a6a8bbaf8c27937c8ce7a&language=en-US&page=1"

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/movie/:id' element={<MoviePage/>}/>
      <Route path='/plays' element={<PlayPage/>}/>
    </Routes>
  
  );
}

export default App;