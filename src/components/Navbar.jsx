import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to={'/movies'}>Movies</Link>
      </li>
      <li>
        <Link to={'/movies'}>Movies</Link>
      </li>
      <li>
        <Link to={'/movies'}>Movies</Link>
      </li>
    </ul>
  )
}

export default Navbar