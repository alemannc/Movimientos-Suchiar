import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

const router= createBrowserRouter([
  {
    path:"/",
    element: <Login/> 
  },
  {
    path:"/register",
    element: <Register/>
  }
]); 
function App() {

  return (
   <>
    <RouterProvider router={router}/>
   </>
  )
}

export default App
