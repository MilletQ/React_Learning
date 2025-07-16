import "./App.css";
import { Component } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Learn React", completed: true },
      { id: 2, name: "Build a Todo App", completed: false },
      { id: 3, name: "Master JavaScript", completed: false },
    ],
  }; // Array to hold todo items
  addTodo = (newTodo) => {
    const { todos } = this.state;
    this.setState({ todos: [newTodo, ...todos] });
  };
  updateTodo = (id, isCompleted) => {
    const { todos } = this.state;
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: isCompleted } : todo
    );
    this.setState({ todos: updatedTodos });
  };
  deleteTodo = (id) => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: updatedTodos });
  };

  deleteAllCompletedTodo = () => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((todo) => !todo.completed);
    this.setState({ todos: updatedTodos });
  };

  checkAllTodos = (checked) => {
    const { todos } = this.state;
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      completed: checked, // Toggle completion status
    }));
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div id="root">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List
              todos={todos}
              updateTodo={this.updateTodo}
              deleteTodo={this.deleteTodo}
            />
            <Footer
              todos={todos}
              deleteAllCompletedTodo={this.deleteAllCompletedTodo}
              checkAllTodos={this.checkAllTodos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
