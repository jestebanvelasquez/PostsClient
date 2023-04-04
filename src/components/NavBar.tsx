import logo from '../assets/pelis.png'
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAppSelector } from '../hooks/redux.hooks';
import { NavMobile } from './NavMobile';
import { useState } from 'react';
import Select from 'react-select';
import { NavDestok } from './NavDestok';
import useScreenSize from '../hooks/custonResizeWindow';


export const NavBar = () => {
    const { setLogout } = useLogout()
    const { userInfo: { username } } = useAppSelector(state => state.user)
    const {width} = useScreenSize()

    return (
        <>
            {
                 width < 780 ? (
                    <NavMobile username={username} setLogout={setLogout}/>
                )
                : <NavDestok username={username} setLogout={setLogout}/>
            }


        </>
    )
}
