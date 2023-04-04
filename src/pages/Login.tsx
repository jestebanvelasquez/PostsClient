import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { customLogin } from '../hooks/customLogin';

export const Login = () => {

	const { errors, login, handleChange, handleSubmit } = customLogin()

	console.log(errors)

	return (
		<div className='auth'>
			<h1>Login</h1>
			<form onSubmit={(e) => handleSubmit(e)} >
				<input
					required
					type="email"
					placeholder='email'
					name='email'
					value={login.email}
					onChange={(e) => handleChange (e)}

					/>
				<input
					required
					type="password"
					placeholder='password'
					name='password'
					value={login.password}
					onChange={(e) => handleChange (e)}
					
					/>
				<button type='submit'>Login</button>

					{errors?.email ? (<span style={{ color: 'red', fontSize: '10px' }}> Error en Email: {errors.email}</span>) : null}
					{ errors?.password ? (<span style={{ color: 'red', fontSize: '10px' }}>Error en Password: {errors.password}</span>) : null}
				<span>no tienes una cuenta? <br /><Link to={'/register'}>registrate aquí.</Link></span>
			</form>
		</div>
	)
}
