import {useNavigate} from 'react-router-dom';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import {Navigate} from 'react-router-dom';

function Buscador() {
    const navigate = useNavigate;
    const swAlert = withReactContent(Swal);
    const submitHandler = e => {
        e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    console.log(keyword)
    
    if(keyword.length === 0) {
        swAlert.fire('Tienes que ingresar un texto');
    }
     else if(keyword.length < 4) {
        swAlert.fire('Se necesitan más de 3 letras para realizar la búsqueda');
    }
    else { 
        e.currentTarget.keyword.value='';
        navigate(`/resultados?keyword=${keyword}`) 
    }
    }
    
    let token = sessionStorage.getItem('token')
    return(
        <>
            
            <form onSubmit={submitHandler} className='d-flex align-items-center'>
                    <label className='form-label mb-0 mx-2'>
                        <input className='form-control' type="text" name='keyword' placeholder="Ingrese una palabra aquí"></input>
                    </label>
                <button type="submit" className="btn btn-success">Buscar</button>
            </form>
        </>
    )
}

export default Buscador;