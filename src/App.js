import "./styles.css";
import Navigator from "./components/Navigator";
import { books, genre } from "./index";
import React from "react";
import BooksList from "./components/BooksList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    window.r = this.refreshPage.bind(this);
  }
  state = {
    reload: false
  };
  refreshPage = () => {
    console.log(this.state.reload);
    this.setState({ reload: true }, () => this.setState({ reload: false }));
  };
  render() {
    let booksList = [];
    if (genre[0] === "") {
      books.forEach((element) => {
        booksList.push(<BooksList key={element.id} book={element} />);
      });
    } else {
      books.forEach((element) => {
        if (element.genre === genre[0])
          booksList.push(<BooksList key={element.id} book={element} />);
      });
    }
    return (
      <div>
        <Navigator />
        <h1>Библиотека</h1>
        {booksList}
      </div>
    );
  }
}
