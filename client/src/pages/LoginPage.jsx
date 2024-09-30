import {useForm} from 'react-hook-form';
import {useAuth} from '../context/AuthContext';
import { useEffect } from 'react';

function LoginPage() {
    const {register, handleSubmit, formState:{
        errors
    }} = useForm(); 
    const {login, errors: loginErrors, isAuthenticated } = useAuth();

    const onSubmit = handleSubmit((data) => {
        login(data);
    });

    useEffect(() => {
        if (isAuthenticated) {
            window.location.href = '/products';
        }
    }, [isAuthenticated]);

    return (
        <div className="container">
            {
                loginErrors.map((error, i) => (
                    <div key={i}>{error}</div>  
                ))
            }
            <h1>Iniciar Sesion</h1>
            <form onSubmit={onSubmit}>
                <input type='email'
                    placeholder='Correo electrónico'
                    {...register('email', { required: true })}
                />
                {
                    errors.email && <span>El correo electrónico es requerido</span>
                }
                <input type='password'
                    placeholder='Contraseña'
                    {...register('password', { required: true, minLength: 6 })}
                />
                {
                    errors.password && <span>La contraseña es requerida y debe tener al menos 6 caracteres</span>
                }
                <button type='submit'>Iniciar sesión</button>
            </form>
            <p>
                No tienes cuenta? <a href="/signup">Regístrate</a>
            </p>
        </div>
    );
}

export default LoginPage;