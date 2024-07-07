import './App.css'
import { useState } from "react";
import Movie from "./Movie";



function App() {

  const [movies, setMovies] = useState([
    "Bad Boys 2",
    "The Matrix",
    "John Wick"
  ]);


  function buttonClickHandler() {
    setMovies((oldMovies) => {
      let newMovies = [...oldMovies];
      newMovies[2] = "Need for Speed";

      return newMovies;
    })

  }


  return (
    <>
      <h1>Movies</h1>
      <ul>
        {movies.map(movie => <Movie key={movie} movie={movie} />)}
      </ul>
      <button onClick={buttonClickHandler}>Change</button>

    </>
  )
}

export default App
