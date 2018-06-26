import React from "react";
import "./movie.css";


// DESTRUCTURING:
// const movie = { title: "Star Wars", id: 1 }
// // to get properties out:
// const title = movie.title;
// const id = movie.id;
// // is the same as:
// const { title, id } = movie;
// const { name, capital } = country;

// STATELESS FUNCTIONAL COMPONENT:
const Movie = ({movie}) => (
  <div>
    <button>+</button>
    <h4 className="movie-title">{movie.title}</h4>
  </div>
)

// CLASS-BASED COMPONENT:
// class Movie extends React.Component {
//   render() {
//     return (
//       <div>
//         <button>+</button>
//         <h4 className="movie-title">{this.props.title}</h4>
//       </div>
//     )
//   }
// }

export default Movie;
