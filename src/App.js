//libraries
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';

//components
import Footer from './components/Footer';
import Header from './components/Header';
import Detalle from './components/Detalle';
import Resultados from './components/Resultados';
import Listado from "./components/Listado";
import Login from "./components/Login";
import Favoritos from './components/Favoritos';

//styles
import './CSS/bootstrap.min.css';
import './CSS/app.css';

function App() {
  //Función agregar o remover favoritos
  
  const [Favorites, setFavorites] = useState([]);
  useEffect(() => {
      const favsInLocal = localStorage.getItem('favs')

      if (favsInLocal !== null) {
          const favsArray = JSON.parse(favsInLocal)
          setFavorites(favsArray)
      }
  }, []);
  const addOrRemoveFromFavs = e => {
    const favMovies = localStorage.getItem('favs')
  let tempMoviesInFavs;

  if (favMovies === null) {
    tempMoviesInFavs = [];
  }
  else {
    tempMoviesInFavs = JSON.parse(favMovies)
  };
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData = {
      imgURL, title, overview /*id: btn.dataset.id*/
    }
    console.log(movieData)
    let movieIsInArray = tempMoviesInFavs.find(oneMovie => {
      return oneMovie.title === movieData.title
    })
    if(!movieIsInArray) {
      tempMoviesInFavs.push(movieData)
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs))
      setFavorites(tempMoviesInFavs)
      console.log('se agregó la película')
    }
    else {
    let moviesLeft = tempMoviesInFavs.filter(oneMovie => {
      return oneMovie.title !== movieData.title
    });
    localStorage.setItem('favs', JSON.stringify(moviesLeft))
    setFavorites(moviesLeft)
      console.log('la película fue removida') 
  }
}
  return (
    <>
      <Header Favorites={Favorites}/>
      <div className='container mt-3'>
        <BrowserRouter>
          <Routes>
            <Route exact path= "/" element = {<Login/>} />
            <Route path= "/home" element = {<Listado addOrRemoveFromFavs={addOrRemoveFromFavs}/>} />
            <Route path= "/detalle" element = {<Detalle />} />
            <Route path= "/resultados" element = {<Resultados addOrRemoveFromFavs={addOrRemoveFromFavs}/>} />
            <Route path= "/favoritos" element = {<Favoritos Favorites={Favorites} addOrRemoveFromFavs={addOrRemoveFromFavs}/>} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </>
  )
}

export default App;
