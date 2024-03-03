import { useState } from "react";
import useGetTmdbMovies from "../hooks/useGetTmdbMovies";
import Navbar from '../components/Navbar.jsx'
import { Link } from "react-router-dom"

const Movies = () => {

  const [movies, setMovies] = useState([])

  useGetTmdbMovies(setMovies)

  return (
    <>
      <Navbar></Navbar>
      {
        movies.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
            </div>
          </Link>
        ))
      }
    </>
  )
}

export default Movies