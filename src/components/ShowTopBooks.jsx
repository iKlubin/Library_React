import "../styles.css";
import Navigator from "./Navigator";
import { books } from "../index";
import React from "react";
import BooksList from "./BooksList";

export default class ShowTopBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 0,
      choiceG: "",
      choiceA: ""
    };
  }
  state = {
    reload: false
  };
  refreshPage = () => {
    this.setState({ reload: true }, () => this.setState({ reload: false }));
  };
  filterChange = (event) => {
    this.setState({ filter: 0 });
    this.refreshPage();
  };
  genreChange = (event) => {
    this.setState({ filter: 1 });
    this.setState({
      choiceG: event.target.options[event.target.selectedIndex].text
    });
    this.refreshPage();
  };
  authorChange = (event) => {
    this.setState({ filter: 2 });
    this.setState({
      choiceA: event.target.options[event.target.selectedIndex].text
    });
    this.refreshPage();
  };
  render() {
    let genresList = [];
    let authorsList = [];
    let booksList = [];
    let listG = [];
    let listA = [];
    books.forEach((element) => {
      genresList.push(element.genre);
    });
    genresList = new Set(genresList);
    genresList.forEach((element) => {
      listG.push(<option value={element}>{element}</option>);
    });
    books.forEach((element) => {
      authorsList.push(element.author);
    });
    authorsList = new Set(authorsList);
    authorsList.forEach((element) => {
      listA.push(<option value={element}>{element}</option>);
    });
    if (this.state.filter === 0) {
      booksList = [].concat(books);
    } else if (this.state.filter === 1) {
      books.forEach((element) => {
        if (element.genre === this.state.choiceG) {
          booksList.push(element);
        }
      });
    } else if (this.state.filter === 2) {
      books.forEach((element) => {
        if (element.author === this.state.choiceA) {
          booksList.push(element);
        }
      });
    }
    booksList.sort((a, b) => parseFloat(b.read) - parseFloat(a.read));
    let listOfBooks = [];
    booksList.forEach((element) => {
      listOfBooks.push(<BooksList key={element.id} book={element} />);
    });
    return (
      <div>
        <Navigator />
        <h1>
          Топ 10 самых читаемых книг{" "}
          {this.state.filter === 0
            ? "за всё время"
            : this.state.filter === 1
            ? "по жанру " + this.state.choiceG
            : " автора " + this.state.choiceA}
        </h1>
        <div>
          <button onClick={this.filterChange}>Общий</button>
          <select
            value={this.choiceG}
            onChange={this.genreChange}
            onClick={this.genreChange}
          >
            {listG}
          </select>
          <select
            value={this.choiceA}
            onChange={this.authorChange}
            onClick={this.authorChange}
          >
            {listA}
          </select>
        </div>
        {listOfBooks}
      </div>
    );
  }
}
