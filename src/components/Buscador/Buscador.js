import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovies, addFavMovie } from "../../redux/actions";
import { Link } from 'react-router-dom';
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }


  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {
           this.props.movies.map( movie => {
              return (
                <li key={ movie.imdbID }>
                  <Link to={`/movie/${movie.imdbID}`}>
                  {movie.Title}{'    '}
                  </Link>
                  <button onClick={() => this.props.addFavMovie({title: movie.Title, id: movie.imdbID}) }> favorito</button>
                </li>
              )
           })
         }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return{
    getMovies: ( movie ) => dispatch( getMovies(movie) ),
    addFavMovie: ( movie ) => dispatch( addFavMovie(movie) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
