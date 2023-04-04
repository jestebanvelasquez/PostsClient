import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Blog } from '../pages/Blog';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { BaseLayout } from '../layout/BaseLayout';
import { Profile } from '../pages/Profile';
import { Write } from '../pages/Write';




export const router = createBrowserRouter([
  {
    path:'/',
    element:<BaseLayout />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/post/:id',
        element:<Blog/>
      },
      {
        path:'/write',
        element:<Write/>
      },
      {
        path:'/profile',
        element:<Profile/>
      }
    ]
  },
  {
    path:'/',
    element:<Home/>
  }, 
  {
    path:'/blog',
    element:<Blog/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  }
])


