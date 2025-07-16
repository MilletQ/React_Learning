import React, { Component } from "react";
import "./index.css"; // Importing CSS for styling

export default class Footer extends Component {
  handleClick = () => {
    this.props.deleteAllCompletedTodo(); // Call deleteAllCompletedTodo from props
  };
  render() {
    const { todos } = this.props;
    const completedCount = todos.reduce(
      (count, todo) => (todo.completed ? count + 1 : count),
      0
    );

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>
            已完成
            {completedCount}
          </span>{" "}
          / 全部{todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.handleClick}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
