import "./Search.css";
import { Link } from "react-router-dom";
function Search() {
  return (
    <div className="search-form">
      <h2>Compra y vende tus libros de texto de segunda mano</h2>

      <div className="search-form--wrapper">
        <form className="search-form-form" action="#" method="post">
          <div className="search-form-input-wrapper">
            <input
              className="search-form-input"
              type="search"
              placeholder="Búsqueda por ISBN, título, curso..."
            />
            <Link to="/search"></Link>
          </div>
        
        <input className="search-form-submit" type="submit" value="&#10140;" />
      </form>
      </div>
    </div>
  );
}

export default Search;
