import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagenation from './Pagenation';

function Movies() {
  let api_key=''
  const [movies, setmovies] = useState([])
  const [page, setpage] = useState(1)
  function incrementPage(){
    setpage(page+1);
  }
  function decrementPage(){
    if(page!=1){
      setpage(page-1);
    }
  }
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&page=${page}`).then((res)=>{
      setmovies(res.data.results);
      document.title="PopularMovies"
    })
  }, [page]);
  
  return (
    <div className='p-5'>
        <div className='m-5 font-bold text-2xl text-center'>
            Trending movies
        </div>
        <div className='flex flex-wrap justify-around gap-8'>
          {movies.map((movieObj)=>{
            return <MovieCard poster={movieObj.poster_path} name={movieObj.original_title}/>
          })}
        </div>
        <Pagenation page={page} incrementPage={incrementPage} decrementPage={decrementPage}/>
    </div>
  )
}

export default Movies;
