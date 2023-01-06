import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Detalle() {
    const swAlert = withReactContent(Swal);
    let token = sessionStorage.getItem('token');
    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=63c89334f7f95d6c58412e7d5dbc805f&language=es-ES`

        axios
            .get(endPoint)
            .then(response => {
                const movieData = response.data;
                console.log(movieData);
                setMovie(movieData);
            })
            .catch(error => {
                console.log(error)
                swAlert.fire('Hubo un error, intente más tarde');
            })
    }, [movieID]);

    return (
        <>
            {!token && <Navigate to='/' />}
            {movie &&
                <>
                    <div className='bg-dark d-flex flex-column'>
                        <div className='col-sm-8'>
                            <h1 className='mt-4 text-white'>{movie.title}</h1>
                        </div>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='rounded mx-auto mt-4 d-flex' id='detalle-img' alt="movie img" />
                        </div>
                        <div className='text-white col-sm-8'>
                            <h3>Resumen </h3>
                            <p>{movie.overview}</p>
                            <h3>Fecha de estreno </h3>
                            <p>{movie.release_date}</p>
                            <h3>Puntuación </h3>
                            <p>{movie.vote_average}</p>
                            <h3>Duración </h3>
                            <p>{movie.runtime}min</p>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Detalle;