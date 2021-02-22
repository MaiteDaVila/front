import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useLocation } from "react-router-dom";
import UserHeader from "./UserHeader.js";
import "./Header.css";

function Header() {
  const location = useLocation();
  const login = useSelector((s) => s.login);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <header>
      <div className="header-title">
        <Link to="/">
          <h1 className="title">
            LIBROS<span>DA</span>ESCOLA
          </h1>
        </Link>
        <UserHeader></UserHeader>
      </div>

      <nav>
        <ul class="navbar">
          <li class="dropdown">
            <a href="#" class="dropbtn">
              {" "}
              Categorías
            </a>
            <div class="dropdown-content">
              <Link key="infantil" to="/search/infantil">
                Ed. Infantil
              </Link>
              <Link key="primaria" to="/search/primaria">
                Ed. Primaria
              </Link>
              <Link key="e.s.o." to="/search/e.s.o.">
                Ed. Secundaria
              </Link>
              <Link key="bachiller" to="/search/bachiller">
                Bachillerato
              </Link>
            </div>
          </li>
          <li>
            <a href="#">Sube tu libro</a>
          </li>
          <li>
            <a href="#">Ayuda</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
