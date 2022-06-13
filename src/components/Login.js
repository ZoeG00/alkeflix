import axios from "axios";

function Login() {
    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email ==='' || password ==='') {
            console.log('Los campos no pueden estar vacíos');
         return; }
    
        if (email !=='' && !regexEmail.test(email)) {
            console.log('Debes escribir una dirección de correo válida');
        return; }

        if (email !=='zoeguzman.ok@gmail.com' || password !=='papasfritas') {
            console.log('Credenciales inválidas');
        return }
        console.log('Todo en orden');
        axios
            .post('http://challenge-react.alkemy.org', {email, password})
            .then (res => {
                console.log(res.data);
            })
    } 
    return (
    <>
        <h2>Formulario de ingreso</h2>
        <form onSubmit={submitHandler}> 
            <label>
                <span>Correo electrónico:</span>
                <input type="text" name="email"></input>
            </label>
            <label>
                <span>Contraseña:</span>
                <input type="password" name="password"></input>
            </label>
            <button type="submit">Ingresar</button>
        </form>
    </>
    )
};

export default Login;