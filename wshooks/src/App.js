import React, {useState} from 'react';
import { MoviesData } from './Components/MoviesData';
import './App.css';
import MoviesList from './Components/MoviesList';
import AddMovie from './Components/AddMovie';
import SearchMovie from './Components/SearchMovie';

function App(){
const [moviesList, setMoviesList]= useState(MoviesData);
const [searchByTitle, setSearchByTitle] = useState('');
const [searchByRate,setSearchByRate] = useState(1);
const addMovie= (x) =>{
  setMoviesList([...moviesList, x])
}

  return(
      <div className='App'>
        <h1 style={{color:'red'}}>Hooked Movies</h1>
        <SearchMovie setSearchByTitle={setSearchByTitle} 
        searchByRate={searchByRate}
        setSearchByRate={setSearchByRate}
        />
       <MoviesList moviesList={moviesList} 
       searchByTitle={searchByTitle} 
       searchByRate={searchByRate}
       />
      <div style={{display:'flex', justifyContent:'center'}}>
        <AddMovie addMovie={addMovie}/>
      </div>
    


     </div> 
  );
  }
export default App;