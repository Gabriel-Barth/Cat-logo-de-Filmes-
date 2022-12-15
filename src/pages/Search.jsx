import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from "../components/MovieCard"

const searchURL = import.meta.env.VITE_SEARCH
const apikey = import.meta.env.VITE_API_KEY

import './MovieGrid.css'

const Search = () => {

const [searchParams] = useSearchParams()

const[movies, setMovies] = useState([])

const query = searchParams.length("q")


const getSearchedMovies = async (response) => {
  const res = await fetch(response);
  const data = await res.json();
  setMovies(data.results);
};

useEffect(() => {
  const searchWithQueryURL = `${searchURL}?${apikey}&query=${query}&language=pt-BR`;
console.log(searchWithQueryURL)
  getSearchedMovies(topRatedUrl);
}, [query]);



  return (
    <div className="container">
    <h2 className="title">Resultados para: <span className='query-text'>{query}</span></h2>
    <div className="movies-container">
      {topMovies.length ===0 && <p>Carregando...</p>}
    {topMovies.length>0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
    </div>
    </div>
  )
}

export default Search
