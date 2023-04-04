import React from 'react'
import { useAppDispatch } from './redux.hooks'
import { useNavigate } from 'react-router-dom';
import { setAccessToken, setSession } from '../state/slices/auth.slice';
import { useEffect } from 'react';

export const useLogout = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const setLogout = () => {
        dispatch( setAccessToken(''))
        dispatch(setSession(false))
        navigate('/login')
    }

  return {
        setLogout
  }
}
