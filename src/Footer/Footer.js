import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <section className="social-icons">
        
          <a href=""
            className="icon-button twitter">
            <i className="icon-twitter"></i>
            <span></span>
          </a>
          <a href="" className="icon-button facebook">
            <i className="icon-facebook"></i>
            <span></span>
          </a>
          <a href="" className="icon-button google-plus">
            <i className="icon-google-plus"></i>
            <span></span>
          </a>
       
      </section>
      <section className="footer-group">
        <div className="footer-section1">
          <h6>Libros da Escola</h6>
          <ul className="footer-links">
            <li>
              <a href="#">¿Quiénes somos?</a>
            </li>
            <li>
              <a href="#">Prensa</a>
            </li>
            <li>
              <a href="#">Equipo</a>
            </li>
          </ul>
        </div>

        <div className="footer-section2">
          <h6>Soporte</h6>
          <ul className="footer-links">
            <li>
              <a href="#">Preguntas frecuentes</a>
            </li>
            <li>
              <a href="#">Reglas de publicación</a>
            </li>
            <li>
              <a href="#">Consejos de seguridad</a>
            </li>
          </ul>
        </div>

        <div className="footer-section3">
          <h6>Legal</h6>
          <ul className="footer-links">
            <li>
              <a href="#">Condiciones de uso</a>
            </li>
            <li>
              <a href="#">Política de Privacidad</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
      </section>

      <div className="copyright-text">
        <p>
          Copyright &copy; 2021 All Rights Reserved by
          <a href="#"> Libros da Escola</a>.
        </p>
      </div>
    </div>
  );
}

export default Footer;