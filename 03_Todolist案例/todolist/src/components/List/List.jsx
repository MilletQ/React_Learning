import React, { Component } from "react";
import "./index.css";
import Item from "../Item/Item";

export default class List extends Component {
  render() {
    return (
      <ul class="todo-main">
        <Item />
        <Item />
      </ul>
    );
  }
}
