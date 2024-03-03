import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import Movies from './pages/Movies.jsx'
import Movie from './pages/Movie.jsx'
import { isAuthenticated } from './services/Auth/isAuthenticated.js'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/movies',
    element: <Movies></Movies>,
    loader: async () => {
      if (!isAuthenticated()) {
        return redirect('/login');
      }
      return null
    }
  },
  {
    path: '/movie/:movieID',
    element: <Movie></Movie>,
    loader: async () => {
      if (!isAuthenticated()) {
        return redirect('/login');
      }
      return null
    }
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <Signup></Signup>
  },
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
