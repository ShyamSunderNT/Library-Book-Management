
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const App = () => {
  const router = createBrowserRouter(AppRoutes)
  return (
    <><RouterProvider router={router} />
    
    </>
  )
}

export default App