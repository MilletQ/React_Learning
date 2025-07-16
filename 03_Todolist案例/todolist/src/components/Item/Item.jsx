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
  render() {
    const { todo } = this.props; // Destructure todo from props
    return (
      <li
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={{
          backgroundColor: this.state.isMouseIn ? "#d3cfcfff" : "#ffffffff",
        }}
      >
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
