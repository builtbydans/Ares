import {BrowserRouter as Router, Link} from "react-router-dom";
import './Header.css'
import BrandLogo from '../../ares-logo.png'

function Header() {
  return (
    <>
      <header>
        <div className="nav-area">
          <img src={BrandLogo} alt="brand-logo" width={100}/>
          <nav>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header;
