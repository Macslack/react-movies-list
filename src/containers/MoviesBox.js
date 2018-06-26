import React from "react";
import MoviesList from "../components/MoviesList";

class MoviesBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        { title: "Star Wars", id: 1 },
        { title: "Jurassic Park", id: 2},
        { title: "Deadpool", id: 3}
      ]
    }
  }

  render() {
    return (
      <div id="movies-box">
        <h1>UK Opening This week</h1>
        <MoviesList movies={this.state.movies} />
      </div>
    )
  }
}

export default MoviesBox;
