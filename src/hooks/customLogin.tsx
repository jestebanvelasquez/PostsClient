import { useState } from 'react'
import { validateLogin } from '../../utils/validate';
import { blogApi } from '../axios/getApi';
import { UserResponse } from '../Interface/apiUser';
import { useAppDispatch } from './redux.hooks';
import { setAccessToken, setSession } from '../state/slices/auth.slice';
import { setUser } from '../state/slices/user.slice';
import { useNavigate } from 'react-router-dom';

export interface LoginInterface {
    email?: string ;
    password?: string ;
}

export const customLogin = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [errors, setErrors] = useState<LoginInterface>()
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name , value } = e.target
        setLogin({
            ...login,
            [name]: value
        })
        const resultError = validateLogin({
            ...login,
            [name]: value
        })
        setErrors({...errors, ...resultError})
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const {data}  = await blogApi.post<UserResponse>('/user/login', login)
            dispatch(setAccessToken(data.token))
            dispatch(setSession(true))
            dispatch(setUser(data.data))
            setLogin({
                email: '',
                password: '',
            })
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }


    return {
        errors,
        login,
        handleChange,
        handleSubmit
    }
}
