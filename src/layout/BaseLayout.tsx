import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux.hooks';
import { Login } from '../pages/Login';




export const BaseLayout = () => {
    const {session} = useAppSelector(state => state.auth)
    if(!session) return (<Login/>)
    return (
        <>
            <div style={{ position:'fixed', zIndex:10, }}>
                <NavBar />
            </div>
            <Outlet/>
            <Footer />
        </>
    )
}
