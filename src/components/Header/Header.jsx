import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

function Header() {
  return (
    <header className="header">
      <nav className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Cyclea logo" />
        </Link>
        <ul className="header__list">
          <li className="header__bio">
            <Link to="/" className="header-link">
              <h3>Home</h3>
            </Link>
          </li>
          <li className="header__cycle">
            <Link to="/cycle" className="header-link">
              <h3>Cycle</h3>
            </Link>
          </li>
          <li className="header__nutrition">
            <Link to="/nutrition" className="header-link">
              <h3>Nutrition</h3>
            </Link>
          </li>
          <li className="header__exercise">
            <Link to="/exercise" className="header-link">
              <h3>Exercise</h3>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
