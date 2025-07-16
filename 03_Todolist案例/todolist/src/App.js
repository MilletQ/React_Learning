import "./App.css";
import { Component } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Learn React", completed: false },
      { id: 2, name: "Build a Todo App", completed: false },
      { id: 3, name: "Master JavaScript", completed: false },
    ],
  }; // Array to hold todo items
  addTodo = (newTodo) => {
    const { todos } = this.state;
    this.setState({ todos: [newTodo, ...todos] });
  };

  render() {
    const { todos } = this.state;
    return (
      <div id="root">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List todos={todos} />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
