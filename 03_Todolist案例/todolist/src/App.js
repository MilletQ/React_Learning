import "./App.css";
import { Component } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header />
            <List />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
