// npm modules
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to='/'><img id='nav-logo' src="src/assets/images/millennium-falcon (1).png" alt="millennium falcon" width='40'/></Link>
        <div id="nav-links">
          <Link to='/starships'>Starships</Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar