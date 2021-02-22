import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import "./Search.css";
import Filters from '../Filters/Filters.js'
import { useDispatch, useSelector } from "react-redux";

function Search() {
  const { level } = useParams();
  const dispatch = useDispatch();

  const books = useFetch("http://localhost:9999/search/" + level) || [];

  if (books.length === 0) return <div className="noresults">No se han encontrado resultados</div>;

  return (
    <div className="complete-search">
      <Filters></Filters>
    <div className="booklist">
      {books.map((book) => (
        <Link to={"/book/detail/" + book.id}>
          <div className="book-wrapper" key={book.id}>
            <div className="book-image">
              <button className="book-btn">Santiago</button>
            </div>
            <div className="book-info">
              <h3 className="book-info-title">
                {book.title}&nbsp;&nbsp;<span>{book.price}€</span>
              </h3>
              <h4 className="book-info-course">{book.course}</h4>
            </div>
          </div>
        </Link>
        
      ))}
    </div>
    </div>
  );
}

export default Search;
