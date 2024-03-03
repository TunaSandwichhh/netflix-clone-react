import { useEffect } from "react"

const useGetTmdbMovies = (setMovies) => {

    const apiKey = '746e6f643ea71d3b18e4a7b217b2b3f8'

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`, options)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.log(error.message))
    }, [])
}

export default useGetTmdbMovies