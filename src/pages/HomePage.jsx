import React, { useEffect, useState } from 'react';
import DefaultLayoutHoc from '../layout/DefaultLayout';


import EntertainmentCardSlider from '../Components/Entertainment/EntertainmentCardComponent';
import HeaderCarousel from '../Components/HeaderCarousel/HeaderCarouselComponent';
import PosterSlider from '../Components/PosterSlider/PosterSliderComponent';
import axios from 'axios';

const HomePage =()=>{
    const [recommendedMovies,setRecommendedMovies]=useState([]);
    const [premiumMovies,setPremiumMovies]=useState([]);
    const [onlineStreamEvents,setOnlineStreamEvents]=useState([]);

    useEffect(()=>{
      const requestTopRatedMovies=async()=>{
        const getTopRatedMovies=await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=3f613ae2d81a6a8bbaf8c27937c8ce7a&language=en-US&page=1");
        setRecommendedMovies(getTopRatedMovies.data.results)
      }
      requestTopRatedMovies();
    });

    useEffect(()=>{
      const requestPremiumMovies=async()=>{
        const getPremiumMovies=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=3f613ae2d81a6a8bbaf8c27937c8ce7a&language=en-US&page=1");
        setPremiumMovies(getPremiumMovies.data.results)
      }
      requestPremiumMovies();
    });

    useEffect(()=>{
      const requestUpcomingMovies=async()=>{
        const getUpcomingMovies=await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=3f613ae2d81a6a8bbaf8c27937c8ce7a&language=en-US&page=1");
        setOnlineStreamEvents(getUpcomingMovies.data.results)
      }
      requestUpcomingMovies();
    });
    


    return(
        <>
        <HeaderCarousel />
  
        <div className="container mx-auto px-4 md:px-12 my-8">
          <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
  
        <div className="container mx-auto px-4 md:px-12 my-8">

          <PosterSlider
            title="Recommended Movies"
            subtitle="List of recommonded movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>
  
        <div className="bg-premier-800 py-12">
          <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
            <div className="hidden md:flex">
              <img
                src=""
                alt="Rupay"
                className="w-full h-full"
              />
            </div>
            <PosterSlider
              title="Premiers"
              subtitle="Brand new releases every Friday"
              posters={premiumMovies}
              isDark={true}
            />
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-12 my-8">
          <PosterSlider
            title="Online Streaming Events"
            subtitle="Online Stream Events"
            posters={onlineStreamEvents}
            isDark={false}
          />
        </div>
      </>
    );
}

export default DefaultLayoutHoc(HomePage);