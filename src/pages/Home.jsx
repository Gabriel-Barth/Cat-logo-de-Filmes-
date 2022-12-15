import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import './MovieGrid.css'


const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, SetTopMovies] = useState([]);

  const getTopRatedMovies = async (response) => {
    const res = await fetch(response);
    const data = await res.json();
    SetTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apikey}&language=pt-BR`;
console.log(topRatedUrl)
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-container">
        {topMovies.length ===0 && <p>Carregando...</p>}
      {topMovies.length>0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
      </div>
  );
};

export default Home;
