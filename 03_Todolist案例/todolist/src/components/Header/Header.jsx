import React, { Component } from "react";
import "./index.css"; // Importing CSS for styling

export default class Header extends Component {
  handleKeyDown = (event) => {
    if (event.key !== "Enter") return; // Only proceed if Enter key is pressed
    this.props.addTodo({
      id: Date.now(), // Unique ID based on current timestamp
      name: event.target.value,
      completed: false, // New todo is not completed by default
    });
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyDown={this.handleKeyDown}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
