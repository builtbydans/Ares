import './Header.css'
import BrandLogo from '../../assets/ares_logo.png'

function Header() {
  return (
    <>
      <header className="container">
        <img src={BrandLogo} alt="brand-logo" width={100} />
        <nav>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </>
  )
}

export default Header;
