import { useState } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "../Api/api";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  let location = useLocation();

  const login = useSelector((s) => s.login);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginApi(email, password);
      dispatch({ type: "login", data });
    } catch (e) {
      setStatus("error");
    }
  };

  if (login) return <Redirect to={location.state.prevPath} />;

  return (
    <div className="login-container">
      <form className="form-complete" onSubmit={handleSubmit}>
        <div className="login-form">
          <input
            className="login-form-box"
            type="email"
            placeholder="Email ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autofocus
          />
        </div>
        <div className="login-form">
          <input
            className="login-form-box"
            placeholder="Password ..."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Link className="forgot-password" to="/user/password/recovery">
          <p>¿Te olvidaste la contraseña?</p>
        </Link>
        {status === "error" && <div>Usuario o contraseña incorrecto</div>}

        <button className="signin-button">Iniciar sesión</button>
       

        <p className="forgot-password">¿No tienes una cuenta aún?</p>

        <Link to="/register" className="signin-button">
          Crear cuenta
        </Link>
      </form>
    </div>
  );
}

export default Login;
