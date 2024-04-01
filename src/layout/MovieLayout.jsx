import React from 'react';
import MovieNavbar from '../Components/Navbar/MovieNavbarComponent';
const MovieLayoutHoc =(Component)=>({...props})=>{
    return(
        <div>
            <MovieNavbar />
            <Component {...props}/>
           <div>footer</div>
        </div>
    );
}

export default MovieLayoutHoc;