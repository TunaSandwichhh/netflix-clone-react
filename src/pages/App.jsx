import './App.css'
import { Link } from 'react-router-dom'

function App() {


  return (
    <>
      <div>
        <Link to={'/login'}>Login</Link>
      </div>
      <div>
        <Link to={'/signup'}>Sign Up</Link>
      </div>
    </>
  )
}

export default App
