import React from "react";
import "./style.css";

function MovieCard(props) {
  return (
    <div className="card">
      <img src={props.poster} alt="" />
      <h3>title : {props.title}</h3>
      <h3>description : {props.desc}</h3>
      <h3>rating : {props.rating}</h3>
    </div>
  );
}

export default MovieCard;
