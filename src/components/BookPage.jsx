import "../styles.css";
import { useLocation } from "react-router-dom";
import Navigator from "./Navigator";
import { Link } from "react-router-dom";

const BookPage = (props) => {
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([book.txt], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = book.name + "_" + book.author + "(" + book.year + ")";
    document.body.appendChild(element);
    element.click();
  };
  const location = useLocation();
  const book = location.state;
  let avg;
  if (book.grade.length === 0) {
    avg = "Оценок нет";
  } else {
    avg =
      book.grade.reduce((partialSum, a) => partialSum + a, 0) /
      book.grade.length;
  }
  let reviewList = [];
  book.rev.forEach((element) => {
    reviewList.push(
      <div className="rev">
        <h3>{'"' + element + '"'}</h3>
      </div>
    );
  });
  const grades = [1, 2, 3, 4, 5];
  const handleChange = (e) => {
    console.log(book.grade);
    book.grade[0] = Number(e.target.value);
  };
  let list = [];
  grades.forEach((element) => {
    list.push(<option value={element}>{element}</option>);
  });
  return (
    <>
      <Navigator />
      <h1>Информация</h1>
      <div className="listP">
        <div>
          <img className="bigImg" src={book.image} alt="imageBook" />
        </div>
        <div>
          <h1>{book.name}</h1>
          <h2>{book.author}</h2>
          <h2>{book.genre}</h2>
          <h2>{book.year}</h2>
          <h2>Количество прочтений: {book.read}</h2>
          <h2>
            Средняя оценка:
            {" " + avg}
          </h2>
          <Link className="Link" to="/EditBook" state={book}>
            <button>Редактировать</button>
          </Link>
          <select value={grades} onChange={handleChange}>
            <option value="">Выставите оценку</option>
            {list}
          </select>
          <Link className="Link" to="/AddReview" state={book}>
            <button>Оставить отзыв</button>
          </Link>
          <button onClick={downloadTxtFile}>Скачать книгу</button>
        </div>
      </div>
      <h1>Текст</h1>
      <div className="listT">
        <div className="text">
          <h4>{book.txt}</h4>
        </div>
      </div>
      <h1>Отзывы</h1>
      {reviewList}
    </>
  );
};

export default BookPage;
