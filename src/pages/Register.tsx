import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/customForm';



export const Register = () => {

    const { error, handleChange, handleSubmit, register } = useForm(
        {
            username: '',
            email: '',
            password: '',
            rpassword: '',
            image: ''
        }
    )



    return (
        <div className='auth'>
            <h1>Registrarse</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    required
                    onChange={(e) => handleChange(e)}
                    name='username' type="text"
                    placeholder='username'
                    value={register.username}
                />
                <input
                    required
                    onChange={(e) => handleChange(e)}
                    type="email"
                    placeholder='email'
                    name='email'
                    value={register.email}
                />

                <input
                    required
                    onChange={(e) => handleChange(e)}
                    type="password" placeholder='password'
                    name='password'
                    value={register.password}
                />

                <input
                    required
                    onChange={(e) => handleChange(e)}
                    type="password"
                    placeholder='password'
                    name='rpassword'
                    value={register.rpassword}
                />

                <button type='submit'>Registrate</button>
                {error && error.username ? (<span style={{ color: 'red', fontSize: '10px' }}>{error.username}</span>) : null}
                {error && error.email ? (<span style={{ color: 'red', fontSize: '10px' }}>{error.email}</span>) : null}
                {error && error.password ? (<span style={{ color: 'red', fontSize: '10px' }}>{error.password}</span>) : null}
                {error && error.rpassword ? (<span style={{ color: 'red', fontSize: '10px' }}>{error.rpassword}</span>) : null}
                <span> tienes una cuenta? <br /><Link to={'/login'}>Login.</Link></span>
            </form>

        </div>
    )
}
