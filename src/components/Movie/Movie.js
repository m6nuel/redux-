import React from 'react';
import { connect } from 'react-redux';
import { clearState, getMovieDetail } from '../../redux/actions';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getMovieDetail(id)
    }

    componentWillUnmount(){
        this.props.clearState();
    }

    // Lo mismo pero con use efect
    // useEffect(() => {
    //     dispatch(getMovieDetail(id));
    
    //     return () => {
    //         dispatch(clearState());
    //     }
    // }, [dispatch,id]);
  

    render() {

        console.log(this.props)

        return (
            <div className="movie-detail">
                <h2>Titulo: { this.props.movieDetail.Title } </h2>
                <img src={ this.props.movieDetail.Poster } alt= { this.props.movieDetail.Title } />
                <h4>Año: { this.props.movieDetail.Year }</h4>
                <h4>Elenco: { this.props.movieDetail.Actors }</h4>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movieDetail: state.movieDetail
    }
}



export default connect(mapStateToProps, { getMovieDetail, clearState })(Movie);