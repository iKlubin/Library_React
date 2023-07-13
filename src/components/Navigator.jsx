import "../styles.css";
import { Link } from "react-router-dom";
import { books, genre } from "../index";

export default function Navigator() {
  const handleChange = (e) => {
    genre[0] = e.target.value;
    window.r();
  };
  let listGenres = [];
  books.forEach((element) => {
    listGenres.push(element.genre);
  });
  listGenres = new Set(listGenres);
  let list = [];
  listGenres.forEach((element) => {
    list.push(<option value={element}>{element}</option>);
  });
  return (
    <div className="nav">
      <Link to="/">
        <button>Главная</button>
      </Link>
      <Link to="/ShowTopBooks">
        <button>Топ книг</button>
      </Link>
      <Link to="/AddBook">
        <button>Добавить книгу</button>
      </Link>
      <select value={genre[0]} onChange={handleChange}>
        <option value="">Поиск по жанру</option>
        {list}
      </select>
    </div>
  );
}
