import './Navbar.sass'
import logo from '../../images/logo2.png'

import { Link } from 'react-router-dom';



function Nav() {
    return (
            <div className="navbar">
                <div className="logo">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
                </div>
                <ul className="navbar-links">
                    <li className="nav-link"><Link to="/" exact>Home</Link></li>
                    <li className="nav-link"><Link to="/About">About</Link></li>
                    <li className="nav-link"><Link to="/Portfolio">Projects</Link></li>
                    <li className="nav-link"><Link to="/Journey">Journey</Link></li> 
                    <li className="nav-link"><Link className="contact" to="/Contact">Let's Talk</Link></li>
                </ul>
            </div>
    )
}

export default Nav