import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import logo from '../assets/pelis.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { filterCategory } from '../state/actions/userActions';
import { useAppDispatch } from '../hooks/redux.hooks';
import { setCategory } from '../state/slices/user.slice';
interface Props {
    username: string;
    setLogout: () => void
}

export const NavMobile = ({ username, setLogout }: Props) => {
    const [open, setOpen] = useState(false)
    const dispatch = useAppDispatch()
    const options = [
        {value: 'alls', label: 'Todos'},
        {value: 'Arte', label: 'arte'},
        {value: 'ciencia', label: 'Ciencia'},
        {value: 'cine', label: 'Cine'},
        {value: 'comida', label: 'Comida'},
        {value: 'diseño', label: 'Diseño'},

    ]

    const handleCategory = (value:string | undefined) => {
        console.log(value)
        dispatch(setCategory(value))
    }

    console.log(open)
    return (
        <div className='nav-movile'>
            <div className='container'>

                <div className="logo">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="toogle" onClick={() => setOpen(!open)}>
                    {
                        !open ? (
                            <FaBars />
                        )
                            : (
                                <FaTimes/>
                            )
                    }
                </div>


                {
                    open ? (
                        <div className="links-M">
                            <Select
                                className='link text-select'
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        width: '230px',
                                        fontSize: '16px',
                                    }),
                                }}
                                onChange={(e) => dispatch(setCategory(e?.value))}
                                defaultValue={{ label: 'Filtrar por Categoria', value: 'empty' }}
                                options={options.map((cat) => ({label: cat.label, value:cat.value}))}
                            />
                            <span className='link'>{username}</span>
                            <span className='write' >
                                <Link to={'/write'}>Escribir</Link>
                            </span>
                            <span onClick={setLogout} className='link'>Logout</span>
                        </div>
                    )
                        :
                        (
                            null
                        )
                }
            </div>
        </div>
    )
}
