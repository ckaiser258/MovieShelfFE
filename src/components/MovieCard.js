import React, { Component, Fragment } from 'react'


class MovieCard extends Component {
    handleClick = () => {
        this.props.deleteFromShelf(this.props.movie.imdb_id)
    }
    render() {
        return (
            <Fragment>
                <div className="movie">
                    <h4>{this.props.movie.title} {this.props.movie.year}</h4>
                    <img height="300" src={this.props.movie.poster} alt="Image Not Found"/>
                    <button onClick={this.handleClick}>Delete</button>
                </div>
            </Fragment>
        )
    }
}

export default MovieCard
