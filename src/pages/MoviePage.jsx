import React, { useEffect,useState } from 'react';
import MovieLayoutHoc from '../layout/MovieLayout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MovieContext } from '../context/MovieContext';
import Slider from 'react-slick';
import {FaCcVisa,FaCcApplePay} from "react-icons/fa";
import PosterSlider from '../Components/PosterSlider/PosterSliderComponent';
import MovieHero from "../Components/MovieHero/MovieHeroComponent";
import Cast from "../Components/Cast/CastComponent";
import { useContext } from 'react';

const MoviePage =()=>{
    const {id}=useParams();
    const {movie,setMovie}=useContext(MovieContext);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [cast,setCast]=useState([]);

    useEffect(()=>{
        const requestCast=async()=>{
            const getCast =await axios.get(
                `https://api.themoviedb.org/3/credits/${id}?api_key=3f613ae2d81a6a8bbaf8c27937c8ce7a&language=en-US&page=1`
                );
            setCast(getCast.data.cast);
        }
        requestCast();
    },[id]);

    useEffect(()=>{
        const requestSimilarMovies=async()=>{
            const getsimilarMovies =await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=3f613ae2d81a6a8bbaf8c27937c8ce7a&language=en-US&page=1`);
            setSimilarMovies(getsimilarMovies.data.results);
        }
        requestSimilarMovies();
    },[id]);

    useEffect(() => {
        const requestRecommededMovies = async () => {
          const getRecommendedMovies = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=3f613ae2d81a6a8bbaf8c27937c8ce7a&language=en-US&page=1`
          );
          setRecommendedMovies(getRecommendedMovies.data.results);
        };
        requestRecommededMovies();
      }, [id]);
    
      useEffect(() => {
        const requestMovie = async () => {
          const getMovieDate = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3f613ae2d81a6a8bbaf8c27937c8ce7a&language=en-US&page=1`);
          setMovie(getMovieDate.data);
        };
        requestMovie();
      }, [id]);
      const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initailSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              initailSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initailSlide: 4,
            },
          },
        ],
      };
    
      const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initailSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initailSlide: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initailSlide: 2,
            },
          },
        ],
      };
    return(
        <>
        <MovieHero />
        <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-gray-800 font-bold gap-3 text-2xl">
              About the movie
            </h1>
            <p>{movie.overview}</p>
          </div>
  
          <div className="my-8">
            <hr />
          </div>
  
          <div className="my-8">
            <h2 className="text-gray-800 font-bold text-2xl mb-3">
              Applicable Offers
            </h2>
            <div className="flex flex-col gap-3 lg:flex-row ">
              <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                <div className="w-8 h-8">
                  <FaCcVisa className="w-full h-full" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-gray-700 text-xl font-bold">
                    Visa Stream Offer
                  </h3>
                  <p className="text-gray-600">
                    Get 75% off up to INR 200 on all RuPay Card* on BookMyShow
                    Stream
                  </p>
                </div>
              </div>
  
              <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                <div className="w-8 h-8">
                  <FaCcApplePay className="w-full h-full" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                  <p className="text-gray-600">
                    Get 75% off up to INR 200 on all RuPay Card* on BookMyShow
                    Stream
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="my-8">
            <hr />
          </div>
  
          {/* Recommended Sliders */}
          <div className="my-8">
            <PosterSlider
              config={settings}
              title="Recommended Movies"
              posters={recommendedMovies}
              isDark={false}
            />
          </div>
  
          <div className="my-8">
            <hr />
          </div>
  
          {/* Cast Slider */}
          <div className="my-8">
            <h2 className="text-gray-800 font-bold text-2xl mb-4">
              Cast and Crew
            </h2>
            <Slider {...settingsCast}>
              {cast.map((castData) => (
                <Cast
                  image={castData.profile_path}
                  castName={movie.original_name}
                  role={movie.character}
                />
              ))}
            </Slider>
          </div>
  
          <div className="my-8">
            <hr />
          </div>
  
          <PosterSlider
            config={settings}
            title="BMS XCLUSIVE Movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>
      </>
    );
  };

export default MovieLayoutHoc(MoviePage);