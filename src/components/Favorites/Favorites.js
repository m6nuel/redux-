import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeFavMovie } from "../../redux/actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        {!this.props.favMovies.length && <h1> Agrega Pelis Favoritas </h1>}
        {this.props.favMovies.length > 0 && 
        <>
          <h2>Películas Favoritas</h2>
          <ul>
            {this.props.favMovies.map( movie => {
                return (
                  <li key={ movie.id }>
                    <Link to={`movie/${movie.id}`}>
                      {movie.title}
                    </Link>
                    <button onClick={() => { this.props.removeFavMovie(movie.id) }}>remove</button>
                  </li>
                )
              })
            }        
          </ul>
        </>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favMovies: state.favMovies
  }
}


export default connect(mapStateToProps, { removeFavMovie })(ConnectedList);
