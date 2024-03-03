import { useEffect } from "react"

const useGetTmdbVideos = (key, setVideos) => {

  const apiKey = '746e6f643ea71d3b18e4a7b217b2b3f8'

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }
  };

  useEffect(() => {
    if (!key) return

    fetch(`https://api.themoviedb.org/3/movie/${key}/videos?api_key=${apiKey}`, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setVideos(data.results)
      })
      .catch(e => console.log(e.message))
  }, [key])
}

export default useGetTmdbVideos