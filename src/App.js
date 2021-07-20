import { useEffect, useState } from "react";

//import Navbar from "./components/navbar";
import Movie from "./components/movie";
import Search from "./components/search";


const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=50cc2d929715507f8e887ec799afc87c&page=1'; 

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(apiUrl)
  }, []);

  const getMovies = (apiUrl) => {
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  return (
    <>
      <Search setMovies={setMovies} getMovies={getMovies}/>
      <div className='movie-container'>
        {movies.length && movies.map((movie) =>
          <Movie key = {movie.id} {...movie}/>)}
      </div>
    </>
  );
}

export default App;
