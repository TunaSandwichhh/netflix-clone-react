import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Movies from './pages/Movies.jsx'
import Movie from './pages/Movie.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/movies',
    element: <Movies></Movies>
  },
  {
    path: '/movie/:movieID',
    element: <Movie></Movie>
  }
  // {
  //   path: '/login',
  //   element: <Login></Login>
  // },
  // {
  //   path: '/signup',
  //   element: <Signup></Signup>
  // },
  // {
  //   path: '/not-found',
  //   element: <Error></Error>
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
