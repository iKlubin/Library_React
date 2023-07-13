import React from "react";
import "../styles.css";
import { useLocation } from "react-router-dom";
import Navigator from "./Navigator";
import { useState } from "react";

export default function AddReview(props) {
  const location = useLocation();
  const book = location.state;
  const [rev, setRev] = useState("");
  const revOnChange = (event) => {
    setRev(event.target.value);
  };
  const upload = () => {
    if (rev !== "") {
      book.rev.push(rev);
      alert("Новый отзыв успешно добавлен!");
    } else {
      alert("Вы не заполнили поле!");
    }
  };
  return (
    <div>
      <Navigator />
      <div className="addRev">
        <input
          type="text"
          placeholder={
            "Напишите свой отзыв о книге '" +
            book.name +
            "' от автора " +
            book.author +
            "!"
          }
          value={rev}
          onChange={revOnChange}
          required
        />
        <input type="button" value="Опубликовать!" onClick={upload} />
      </div>
    </div>
  );
}
