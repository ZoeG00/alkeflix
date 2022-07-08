import {Navigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Favoritos(props) {
  /*      const [Favorites, setFavorites] = useState([]);
    useEffect(() => {
        const favsInLocal = localStorage.getItem('favs')

        if (favsInLocal !== null) {
            const favsArray = JSON.parse(favsInLocal)
            setFavorites(favsArray)
        }
    }, []); */
    let token = sessionStorage.getItem('token');
    return (
        <>
            
            {!token && <Navigate to='/' />}
            <h2>Sección Favoritos</h2>
            <p>Presione el <img src='https://images.emojiterra.com/google/android-oreo/512px/2764.png' alt='corazon' className='corazon-img'/> para <em>agregar</em> o <em>quitar</em> de <strong>favoritos</strong></p>
            <div className='row'>
                {!props.Favorites.length > 0 && <h2>No se encotraron favoritos</h2>}
                {props.Favorites.map((oneMovie, idx) => {
                return (
                    <>
                        <div className='col-3' key={idx}>
                            <div className="card my-4">
                                <img src={oneMovie.imgURL} className="card-img-top"  alt="imagenes"/>
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
            </div>
        </>
    )
}

export default Favoritos;