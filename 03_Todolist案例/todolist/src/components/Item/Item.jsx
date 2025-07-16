import React, { Component } from "react";
import "./index.css"; // Importing CSS for styling

export default class Item extends Component {
  render() {
    const { todo } = this.props; // Destructure todo from props
    return (
      <li>
        <label>
          <input type="checkbox" />
          <span>{todo.name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>
          删除
        </button>
      </li>
    );
  }
}
