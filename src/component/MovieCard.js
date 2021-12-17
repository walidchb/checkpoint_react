import React, { Component } from "react";
import "./style.css";

export default class MovieCard extends Component {
  render() {
    return (
      <div className="card">
        <img src="./mikassa.jpg" alt="" />
        <h3>title : Attack n titan </h3>
        <h3>description : the best ever</h3>
        <h3>rating : 9.8</h3>
      </div>
    );
  }
}
