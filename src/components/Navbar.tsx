import { Link } from "react-router-dom"
import "../style/components/Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <Link to="/">
          <li className="navbar-items">
            <p>About</p>
          </li>
        </Link>
        <Link to="/projects">
          <li className="navbar-items">
            <p>Projects</p>
          </li>
        </Link>
        <Link to="/contact">
          <li className="navbar-items">
            <p>Contact</p>
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar