import { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom';
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
                <div className='row'>
                    <div className='card my-2 bg-dark'>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="rounded mx-auto d-block mt-4"  alt="imagen"/>
                         <div className='col-8 ml-2 text-white'>
                            <h1 className='mt-4'>Título: {movie.title}</h1> 
                            <h2>Resumen </h2>
                            <p>{movie.overview}</p>
                            <h2>Fecha de estreno </h2>
                            <p>{movie.release_date}</p>
                            <h2>Puntuación </h2>
                            <p>{movie.vote_average}</p>
                            <h2>Duración </h2>
                            <p>{movie.runtime}min</p>
                        </div>
                    </div>
                </div>
                
                
            </>
            }
        </>
    )
}

export default Detalle;