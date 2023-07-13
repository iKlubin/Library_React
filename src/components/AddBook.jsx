import React, { Component } from "react";
import "../styles.css";
import Navigator from "./Navigator";
import Book from "../index";
import { books } from "../index";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      author: "",
      genre: "",
      year: "",
      txt: "",
      image: ""
    };
  }
  nameOnChange = (event) => {
    this.setState({ name: event.target.value });
  };
  authorOnChange = (event) => {
    this.setState({ author: event.target.value });
  };
  genreOnChange = (event) => {
    this.setState({ genre: event.target.value });
  };
  yearOnChange = (event) => {
    this.setState({ year: event.target.value });
  };
  txtOnChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = e.target.result;
      this.setState({ txt: fileContent });
    };
    reader.readAsText(file);
  };
  imageOnChange = (event) => {
    this.setState({ image: event.target.value });
  };
  upload = () => {
    if (
      this.state.name !== "" &&
      this.state.author !== "" &&
      this.state.genre !== "" &&
      this.state.year !== ""
    ) {
      const newBook = new Book(
        books.length,
        this.state.name,
        this.state.author,
        this.state.genre,
        this.state.year,
        this.state.txt,
        this.state.image === ""
          ? "https://4.bp.blogspot.com/-pfHsvGQPibo/UXTDr3i7kpI/AAAAAAACHZY/vlwzQjFck34/s1600/index_09.jpg"
          : this.state.image,
        [],
        [],
        0
      );
      books.push(newBook);
      alert("Новая книга успешно добавлена!");
    } else {
      alert("Вы не заполнили поля!");
    }
  };
  render() {
    return (
      <div>
        <Navigator />
        <div className="form">
          <input
            type="text"
            placeholder="Название"
            value={this.state.name}
            onChange={this.nameOnChange}
            required
          />
          <input
            type="text"
            placeholder="Автор"
            value={this.state.author}
            onChange={this.authorOnChange}
            required
          />
          <input
            type="text"
            placeholder="Жанр"
            value={this.state.genre}
            onChange={this.genreOnChange}
            required
          />
          <input
            type="text"
            placeholder="Год издания"
            value={this.state.year}
            onChange={this.yearOnChange}
            required
          />
          <input type="file" onChange={this.txtOnChange} required />
          <input
            type="text"
            placeholder="Ссылка на обложку"
            value={this.state.image}
            onChange={this.imageOnChange}
            required
          />
          <input type="button" value="Загрузить" onClick={this.upload} />
        </div>
      </div>
    );
  }
}

export default AddBook;
