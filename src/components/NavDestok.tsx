import logo from '../assets/pelis.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Select from 'react-select';
import { useAppDispatch } from '../hooks/redux.hooks';
import { setCategory } from '../state/slices/user.slice';



interface Props {
    username: string;
    setLogout: () => void
}

export const NavDestok = ({ username, setLogout }: Props) => {
    const { width } = window.screen
    const [open, setOpen ] = useState(true)
    const dispatch = useAppDispatch()
    const options = [
        {value: 'alls', label: 'Todos'},
        {value: 'arte', label: 'Arte'},
        {value: 'ciencia', label: 'Ciencia'},
        {value: 'cine', label: 'Cine'},
        {value: 'comida', label: 'Comida'},
        {value: 'diseño', label: 'Diseño'},
        {value: 'tecnologia', label: 'Tecnologia'},


    ]

  return (
    <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="links" >
                    <Select
                    className='link'
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                width: '230px',
                                fontSize: '16px',
                            }),
                        }}
                        defaultValue={{ label: 'Filtrar por Categoria', value: 'empty' }}
                        options={options}
                        onChange={(e) => dispatch(setCategory(e?.value))}
                    />
                    <span className='link active' >{username}</span>
                    <span onClick={setLogout} className='link '>Logout</span>
                    <span className='write link '>
                        <Link to={'/write'}>Escribir</Link>
                    </span>
                </div>
                
            </div>
        </div>
  )
}

