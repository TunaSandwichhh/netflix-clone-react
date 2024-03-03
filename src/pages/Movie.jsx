import { useState } from "react"
import { useParams } from "react-router-dom";
import useGetTmdbVideos from "../hooks/useGetTmdbVideos"

const Movie = () => {
    const { movieID } = useParams();
    const [videos, setVideos] = useState([])

    useGetTmdbVideos(movieID, setVideos)

    const trailer = videos.find(video => video.type === 'Trailer');

    console.log(movieID);

    return (
        <div>
            {trailer ? (
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            ) : (
                <p>Trailer non disponibile.</p>
            )}
        </div>
    );
}

export default Movie