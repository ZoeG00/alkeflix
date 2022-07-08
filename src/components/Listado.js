import {Link} from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Listado(props) {
    const swAlert = withReactContent(Swal);
    let token = sessionStorage.getItem('token');
    const [moviesList, setMoviesList] = useState([]);
    useEffect(() => {
        const endPoint= 'https://api.themoviedb.org/3/discover/movie?api_key=63c89334f7f95d6c58412e7d5dbc805f&language=es-ES&page=1';
        axios 
        .get(endPoint)
        .then(response => {
            const apiData = response.data
            setMoviesList(apiData.results)
        })
        .catch(error => {
            console.log(error)
            swAlert.fire('Lo siento, sucedió un error intente más tarde')
        })
    }, [setMoviesList]);

    return (
        <>  
            <div className='row'>
                {!token && <Navigate to='/' />}
                {moviesList.map((oneMovie, idx) => {
                return (
                    <>
                        <div className='col-3' key={idx}>
                            <div className="card my-4">
                                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top"  alt="imagenes"/>
                                <button onClick={props.addOrRemoveFromFavs} className='favourite-btn'>❤</button>
                                <div className="card-body">
                                    <h5 className="Movie Title">{oneMovie.title.substring(0, 18)}...</h5>
                                    <p className="Movie Overview">{oneMovie.overview.substring(0, 50)}...</p>
                                    <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-danger d-grid gap-2 d-md-flex justify-content-md-center">Ver detalles</Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                )}
                <div className="text-center">
                <div className="spinner-border text-danger" role="hidden" aria-hidden="true">
                    <span className="visibility-hidden"></span>
                </div>
                </div>
            </div>
        </>
    )
}   
export default Listado;