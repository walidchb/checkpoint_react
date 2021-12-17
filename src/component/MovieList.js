import React, { Component } from "react";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      rating: "",
      poster: "",
    };
    this.TitleChange = this.TitleChange.bind(this);
    this.DescriptionChange = this.DescriptionChange.bind(this);
    this.PosterURLChange = this.PosterURLChange.bind(this);
    this.RatingChange = this.RatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  TitleChange(event) {
    this.setState({ title: event.target.value });
  }

  DescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  PosterURLChange(event) {
    this.setState({ poster: event.target.value });
  }

  RatingChange(event) {
    this.setState({ rating: event.target.value });
  }

  handleSubmit(event) {
    // <MovieCard
    //   title={this.state.title}
    //   description={this.state.description}
    //   poster={this.state.poster}
    //   rating={this.state.rating}
    // />;
    alert("title : " + this.state.title);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <MovieCard />
        <form onSubmit={this.handleSubmit}>
          <label>
            Title :
            <input
              type="text"
              value={this.state.title}
              onChange={this.TitleChange}
            />
          </label>

          <label>
            Description :
            <input
              type="text"
              value={this.state.description}
              onChange={this.DescriptionChange}
            />
          </label>

          <label>
            PosterURL :
            <input
              type="text"
              value={this.state.poster}
              onChange={this.PosterURLChange}
            />
          </label>

          <label>
            Rating :
            <input
              type="text"
              value={this.state.rating}
              onChange={this.RatingChange}
            />
          </label>

          <input type="submit" value="Envoyer" />
        </form>
      </div>
    );
  }
}
