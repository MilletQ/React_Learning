import React, { Component } from "react";
import "./index.css"; // Importing CSS for styling

export default class Item extends Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox" />
          <span>xxxxx</span>
        </label>
        <button class="btn btn-danger" style={{ display: "none" }}>
          删除
        </button>
      </li>
    );
  }
}
