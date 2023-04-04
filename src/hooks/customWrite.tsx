import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './redux.hooks'
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { blogApi } from '../axios/getApi';
import { setPosts } from '../state/slices/user.slice';
import { validateWrite } from '../../utils/validate';
import { uploadImage } from '../../utils/cloudImage';
import { PostResponse } from '../Interface/Post.interface';



export interface WriteInterface {
    title: string,
    desc: string,
    image: string,
    cat: string
}

export type Cat = 'arte' | 'cine' | 'comida' | 'diseño' | 'tecnologia' | 'ciencia'


export const customWrite = () => {

    const { accessToken } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const naviagate = useNavigate()

    const [error, setError] = useState<WriteInterface>({
        title: '',
        desc: '',
        image: '',
        cat: ''
    })
    const [post, setPost] = useState<WriteInterface>({
        title: '',
        desc: '',
        image: '',
        cat: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setPost({
            ...post,
            [name]: value
        })
        const resultError = validateWrite({
            ...error,
            [name]: value
        })
        setError(resultError)
    }

    const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const image = await uploadImage(e)
        setPost({
            ...post,
            image: image
        })
    }

    const handleText = (e: string) => {
        setPost({
            ...post,
            desc: e
        })
        const resultError = validateWrite({
            ...post,
            desc: e
        })
        setError(resultError)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(accessToken)
        const { data } = await blogApi.post<PostResponse>('/post',
            post,
            {
                method:'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        dispatch(setPosts(data.data))
        
        naviagate('/')

    }


    return {
        post,
        error,
        handleChange,
        handleSubmit,
        handleImage,
        handleText
    }
}
