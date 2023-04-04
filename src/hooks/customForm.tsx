import { useState, useEffect } from 'react';
import { validate } from '../../utils/validate';
import { blogApi } from '../axios/getApi';
import { UserResponse } from '../Interface/apiUser';
import { setAccessToken, setSession } from '../state/slices/auth.slice';
import { setUser } from '../state/slices/user.slice';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './redux.hooks';

export interface User {
    username: string;
    email: string;
    password: string;
    rpassword: string;
    image?: string
}

export const useForm = (initialForm = {}) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [error, setError] = useState<User>({
        username: '',
        email: '',
        password: '',
        rpassword: '',
        image: ''
    })


    const [register, setRegister] = useState<User>({
        username: '',
        email: '',
        password: '',
        rpassword: '',
        image: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegister({
            ...register,
            [name]: value
        })
        const errorResult = validate({
            ...register,
            [name]: value
        })
        setError({
            ...error,
            ...errorResult
        })
    }
    const { userInfo } = useAppSelector(state => state.user)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const { data } = await blogApi.post<UserResponse>('/user/register', register)

            dispatch(setAccessToken(data.token))
            dispatch(setSession(true))
            dispatch(setSession(true))
            dispatch(setUser(data.data))
            setRegister({
                username: '',
                email: '',
                password: '',
                rpassword: '',
                image: ''
            })
            console.log(userInfo)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        validate(register)
    },[])

    return {
        error,
        register,
        handleChange,
        handleSubmit
    }
}