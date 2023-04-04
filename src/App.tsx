import { RouterProvider } from 'react-router-dom'
import { router } from './routes/RoutesApp';
import './style/style.scss'


const App = () => {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
