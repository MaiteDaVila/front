import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useLocation } from "react-router-dom";
import "./UserHeader.css";

function UserHeader() {
  const location = useLocation();
  const login = useSelector((s) => s.login);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div>
      {!login && (
        <div className="login">
          <Link
            to={{ pathname: "/login", state: { prevPath: location.pathname } }}
          >
            Iniciar sesión
          </Link>
          <Link to="/register">
            <span>Regístrate</span>
          </Link>
        </div>
      )}

      {login && (
        <div className="navigation-logout">
         
          <div id="menuToggle">

            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu-registered">
            <li>Hola {login.name}</li>
              <a href="/">
                <li>Home</li>
              </a>
              <Link to="/user/mypanel">
                <li>Mi cuenta</li>
              </Link>

              <a href="">
                <li onClick={handleLogout}>Cerrar sesión</li>
              </a>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserHeader;
