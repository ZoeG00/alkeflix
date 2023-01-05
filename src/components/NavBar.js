//components
import Buscador from "./Buscador";

function Header(props) {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="/"><img src='https://fontmeme.com/permalink/220623/447f8a486a1160e2c9266a79cc12badd.png' className="img-fluid col-6 rounded mx-auto d-block" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/favoritos">Favoritos</a>
                                </li>
                                <li className="nav-item">
                                    <span className='text-danger'>{props.Favorites.length > 0 && props.Favorites.length}</span>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="/login">Salir</a>
                                </li>
                            </ul>
                            <Buscador />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;