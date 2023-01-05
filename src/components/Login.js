import { useNavigate, Navigate } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Login() {
    const swAlert = withReactContent(Swal);
    const navigate = useNavigate();

    //VALIDACIÓN DE CORREO ELECTRÓNICO 
    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === '' || password === '') {
            swAlert.fire(<h3>Los campos no pueden estar vacíos</h3>);
            return;
        }

        if (email !== '' && !regexEmail.test(email)) {
            swAlert.fire(<h3>Debes escribir una dirección de correo válida</h3>);
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert.fire(<h3>Credenciales inválidas</h3>);
            return
        }
        //PETICIÓN A LA LIBRERÍA AXIOS
        axios
            .post('http://challenge-react.alkemy.org', { email, password })
            .then(res => {
                const tokenRecibido = res.data.token;
                sessionStorage.setItem('token', tokenRecibido);
                navigate("/home");
            })
    };
    let token = sessionStorage.getItem('token');
    
    //FORMULARIO DE INGRESO 
    return (
        <>
            {token && <Navigate to='home' />}
            <form onSubmit={submitHandler}>
                <img src='https://fontmeme.com/permalink/220623/447f8a486a1160e2c9266a79cc12badd.png' className='img-fluid rounded mx-auto d-block' alt='alkeflix'></img>
                <h1 class="h4 mb-3 fw-normal text-center">Por favor, inicie sesión</h1>
                <div class="form-floating">
                    <input type="email" name='email' class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Correo electrónico</label>
                </div>
                <div class="form-floating mt-4">
                    <input type="password" class="form-control" id="floatingPassword" name='password' placeholder="Contraseña" />
                    <label for="floatingPassword">Contraseña</label>
                </div>

                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="recordarme" /> Recordarme
                    </label>
                </div>
                <button class="w-100 btn btn-lg btn-success" type="submit">Ingresar</button>
            </form>
        </>
    )
};

export default Login;