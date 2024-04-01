import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
const Poster = (props) => {
  return (
    //Link is used to to goto another page on same tab
    <Link to={`/movie/${props.id}`}>
      <div className="flex flex-col items-start gap-2 px-1 md:px-3">
        <div className="h-40 md:h-80">
          <img src={`https://images.tmdb.org/t/p/original${props.poster_path}`} alt="poster" className="w-full h-full rounded-md"></img>
        </div>
        <h3 className={`text-lg font-bold ${props.isDark?"text-white":"text-gray-700"}`}>{props.title}</h3>
        
      </div>
    </Link>
  );
}

export default Poster