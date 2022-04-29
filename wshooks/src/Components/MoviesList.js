import React from "react";
import AddMovie from "./AddMovie";
import MovieCard from "./MovieCard";
import './MovieList.css';


const MoviesList =({ moviesList, searchByTitle, searchByRate }) => {

  
  return(

    <div className="movies-list">
      {moviesList
      .filter((el) =>
       el.title.toLowerCase().includes(searchByTitle.toLowerCase().trim()) 
       )
      
      .map((movie , i) => (
      <MovieCard key={i} movie={movie}/>
      ))}
    </div>
  );
};
export default MoviesList;