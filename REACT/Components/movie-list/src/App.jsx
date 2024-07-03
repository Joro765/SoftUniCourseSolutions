import "./styles.css"

import MovieList from "./components/MovieList";

function App() {
  const movies = [
    { title: "Bad Boys", year: 2021, rating: 4.1 },
    { title: "The Matrix", year: 2005, rating: 5 },
    { title: "John Wick", year: 2020, rating: 4.3 }
  ]

  return (
    <>
      <MovieList movies={movies} title="My Movies" />
    </>
  )
}

export default App
