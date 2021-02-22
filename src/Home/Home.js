import { Link } from "react-router-dom";
import "./Home.css";
import icon1 from "../static/icon1.png";
import icon2 from "../static/icon2.png";
import Search from "./Search/Search.js";


function Home() {
  const levels = [
    {
      title: "educacion infantil",
      key: "infantil",
    },
    {
      title: "educacion primaria",
      key: "primaria",
    },
    {
      title: "educacion secundaria",
      key: "e.s.o.",
    },
    {
      title: "bachillerato",
      key: "bachiller",
    },
  ];

  return (
    <div className="Home">
     <Search></Search>
      <section className="section-home-info">
        <h2>
          Ahorra y ayuda al medioambiente comprando libros de segunda mano
        </h2>

        <div className="section-home-articles">
          <article className="section-home-article">
            <img src={icon1} width="50px" height="50px"></img>
            <h4>Bueno para el medioambiente, bueno para nuestro futuro.</h4>
          </article>

          <article className="section-home-article">
            <img src={icon2} width="50px" height="50px"></img>
            <h4>
              Un libro, un árbol. Nos hemos asociado con ONG y así, por cada
              transacción hecha en la web, se plantará un árbol.
            </h4>
          </article>
        </div>
      </section>
      <section className="section-home-categories">
        <h2>Explora por categoría</h2>
        <div id="courses-menu">
          <Link
            key="infantil"
            to="/search/infantil"
            className="courses-menu-item"
            id="courses-menu-inf"
          >
            ED. INFANTIL
          </Link>
          <Link
            key="primaria"
            to="/search/primaria"
            className="courses-menu-item"
            id="courses-menu-pri"
          >
            ED. PRIMARIA
          </Link>
          <Link
            key="e.s.o."
            to="/search/e.s.o."
            className="courses-menu-item"
            id="courses-menu-sec"
          >
            ED. SECUNDARIA
          </Link>
          <Link
            key="bachiller"
            to="/search/bachiller"
            className="courses-menu-item"
            id="courses-menu-bach"
          >
            BACHILLERATO
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
