import React from 'react';
import MovieItem from './movie_item';
function videoList(props){
    return(
        <div className="row">
            {props.movies ? props.movies.map(movie => <MovieItem key={movie.imdbID} movie={movie}/> ) : null}
        </div>
        
    )
}
export default videoList;