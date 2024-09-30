import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const { register, handleSubmit, formState: {
        errors
    }} = useForm();
    const { signup, isAuthenticated, errors: signupErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/products');
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    })

    return (
        <div className="container">
            {
                signupErrors.map((error, i) => (
                    <div key={i}>{error}</div>  
                ))
            }
            <h1>Registrarse</h1>
            <form onSubmit={onSubmit}>
                <input type='text'
                    placeholder='Nombre de usuario'
                    {...register('username', { required: true })}
                />
                {
                    errors.username && <span>El nombre de usuario es requerido</span>
                }
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
                <button type='submit'>Registrarse</button>
            </form>
            <p>
                Ya tienes cuenta? <a href="/login">Inicia sesión</a>
            </p>
            
        </div>
    );

}

export default SignupPage; 