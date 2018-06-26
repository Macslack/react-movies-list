import React from "react";
import Movie from "./Movie";

class MoviesList extends React.Component {
  render() {
    const movieListItems = this.props.movies.map(movie => {
      return <Movie key={movie.id} movie={movie}/>
    })

    return (
      <ul>
        {movieListItems}
      </ul>
    )
  }
}

export default MoviesList;
