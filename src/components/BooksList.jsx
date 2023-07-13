import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

export default function BooksList(props) {
  const propBook = props.book;
  return (
    <Link className="Link" to="/BookPage" state={propBook}>
      <div className="list">
        <div>
          <img src={props.book.image} alt="imageBook" />
        </div>
        <div>
          <h2>{props.book.name}</h2>
          <h3>{props.book.author}</h3>
          <h3>{props.book.genre}</h3>
          <h3>{props.book.year}</h3>
        </div>
      </div>
    </Link>
  );
}
