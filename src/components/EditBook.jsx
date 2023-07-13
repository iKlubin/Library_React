import React from "react";
import "../styles.css";
import { useLocation } from "react-router-dom";
import Navigator from "./Navigator";
import { useState } from "react";

export default function EditBook(props) {
  const location = useLocation();
  const book = location.state;
  const [name, setName] = useState(book.name);
  const [author, setAuthor] = useState(book.author);
  const [genre, setGenre] = useState(book.genre);
  const [year, setYear] = useState(book.year);
  const [txt, setTxt] = useState(book.txt);
  const [image, setImage] = useState(book.image);
  const nameOnChange = (event) => {
    setName(event.target.value);
  };
  const authorOnChange = (event) => {
    setAuthor(event.target.value);
  };
  const genreOnChange = (event) => {
    setGenre(event.target.value);
  };
  const yearOnChange = (event) => {
    setYear(event.target.value);
  };
  const txtOnChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = e.target.result;
      setTxt(event.target.value);
    };
    reader.readAsText(file);
  };
  const imageOnChange = (event) => {
    setImage(event.target.value);
  };
  const upload = () => {
    if (name !== "" && author !== "" && genre !== "" && year !== "") {
      book.name = name;
      book.author = author;
      book.genre = genre;
      book.year = year;

      alert("Книга успешно обновлена!");
    } else {
      alert("Вы не заполнили поля!");
    }
  };
  return (
    <div>
      <Navigator />
      <div className="form">
        <input
          type="text"
          placeholder="Название"
          value={name}
          onChange={nameOnChange}
          required
        />
        <input
          type="text"
          placeholder="Автор"
          value={author}
          onChange={authorOnChange}
          required
        />
        <input
          type="text"
          placeholder="Жанр"
          value={genre}
          onChange={genreOnChange}
          required
        />
        <input
          type="text"
          placeholder="Год издания"
          value={year}
          onChange={yearOnChange}
          required
        />
        <input type="file" onChange={txtOnChange} required />
        <input
          type="text"
          placeholder="Ссылка на обложку"
          value={image}
          onChange={imageOnChange}
          required
        />
        <input type="button" value="Изменить" onClick={upload} />
      </div>
    </div>
  );
}
