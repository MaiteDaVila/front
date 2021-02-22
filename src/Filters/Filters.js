import "./Filters.css";
import { Link, Redirect, useLocation } from "react-router-dom";

function Filters() {
  return (
    <div>
      
      <ul className="filters">
      <h4 className="filters-title">Filtros </h4>
        <li className="filter-form">
          <button className="btn-filter">Ciudad</button>
          <div class="btn-dropdown-content">
            <Link key="" to="/search/">
              A Coruña
            </Link>
            <Link key="" to="/search/">
              Ferrol
            </Link>
            <Link key="" to="/search/">
              Lugo
            </Link>
            <Link key="" to="/search/">
              Ourense
            </Link>
            <Link key="" to="/search/">
              Pontevedra
            </Link>
            <Link key="" to="/search/">
              Santiago
            </Link>
            <Link key="" to="/search/">
              Vigo
            </Link>
          </div>
        </li>
        <li className="filter-form">
          <button className="btn-filter">Precio</button>
          <div class="btn-dropdown-content">
            <Link key="" to="/search/">
              Menos de 10 €
            </Link>
            <Link key="" to="/search/">
            Menos de 20 €
            </Link>
            </div>
        </li>
        <li className="filter-form">
          <button className="btn-filter">Categorías</button>
          <div class="btn-dropdown-content">
            <Link key="" to="/search/">
              1º Infantil
            </Link>
            <Link key="" to="/search/">
              2º Infantil{" "}
            </Link>
            <Link key="" to="/search/">
              1º Primaria{" "}
            </Link>
            <Link key="" to="/search/">
              2º Primaria{" "}
            </Link>
            <Link key="" to="/search/">
              3º Primaria{" "}
            </Link>
            <Link key="" to="/search/">
              4º Primaria{" "}
            </Link>
            <Link key="" to="/search/">
              5º Primaria{" "}
            </Link>
            <Link key="" to="/search/">
              6º Primaria{" "}
            </Link>
            <Link key="" to="/search/">
              1º ESO{" "}
            </Link>
            <Link key="" to="/search/">
              2º ESO{" "}
            </Link>
            <Link key="" to="/search/">
              3º ESO
            </Link>
            <Link key="" to="/search/">
              4º ESO{" "}
            </Link>
            <Link key="" to="/search/">
              1º Bachillerato{" "}
            </Link>
            <Link key="" to="/search/">
              2º Bachillerato{" "}
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Filters;
