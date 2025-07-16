import React, { Component } from "react";
import "./index.css";
import Item from "../Item/Item";

export default class List extends Component {
  render() {
    const { todos, updateTodo, deleteTodo } = this.props; // Destructure todos from props
    return (
      <ul className="todo-main">
        {todos.map((todo) => (
          <Item
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    );
  }
}
