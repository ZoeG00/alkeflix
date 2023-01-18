import {useState, useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {Link} from 'react-router-dom';

function Resultados(props) {
    const swAlert = withReactContent(Swal);
    const query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    const [moviesResults, setMoviesResults] = useState([]);
    useEffect(() => {
        const endPoint= `https://api.themoviedb.org/3/discover/movie?api_key=63c89334f7f95d6c58412e7d5dbc805f&language=es-ES&query=${keyword}`
        axios 
        .get(endPoint)
        .then(response => {
            const moviesArray = response.data.results;
            setMoviesResults(moviesArray)
        })
        .catch(error => {
            console.log(error)
            swAlert.fire('Lo siento, sucedió un error intente más tarde')
        })
    }, [keyword, swAlert]);
console.log(moviesResults)
return (
    <>  
    <div className='row'>
        {moviesResults.map((oneMovie, idx) => {
        return (
            <>
                <div className='col-3' key={idx}>
                    <div className="card my-4">
                        <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top"  alt="imagenes"/>
                        <div className="card-body">
                            <h5 className="Movie Title">{oneMovie.title.substring(0, 18)}...</h5>
                            <p className="Movie Overview">{oneMovie.overview.substring(0, 50)}...</p>
                            <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-danger d-grid gap-2 d-md-flex justify-content-md-center">Ver detalles</Link>
                        </div>
                    </div>
                </div>
            </>
        )}
        )};
    </div>
</>
)
}

export default Resultados;