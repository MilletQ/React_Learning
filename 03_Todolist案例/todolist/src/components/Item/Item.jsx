import React, { Component } from "react";
import "./index.css"; // Importing CSS for styling

export default class Item extends Component {
  state = {
    isMouseIn: false, // State to track mouse hover
  };
  handleMouseEnter = () => {
    this.setState({ isMouseIn: true }); // Set state to true when mouse enters
  };
  handleMouseLeave = () => {
    this.setState({ isMouseIn: false }); // Set state to false when mouse leaves
  };
  handleOnChange = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked); // Call updateTodo with id and checked status
    };
  };
  handleClick = (id) => {
    return (event) => {
      this.props.deleteTodo(id); // Call updateTodo with id and checked status
    };
  };
  render() {
    const { todo } = this.props; // Destructure todo from props
    return (
      <li
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={{
          backgroundColor: this.state.isMouseIn ? "#e2e1e1ff" : "#ffffffff",
        }}
      >
        <label>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={this.handleOnChange(todo.id)}
          />
          <span>{todo.name}</span>
        </label>
        <button
          className="btn btn-danger"
          onClick={this.handleClick(todo.id)}
          style={{ display: this.state.isMouseIn ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
