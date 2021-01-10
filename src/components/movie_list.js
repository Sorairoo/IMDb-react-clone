import React from 'react';

function videoList(props){
    return(
        <ul>
            {props.movies.map(movie => <li key={movie.imdbID}>{movie.Title}</li>)}
        </ul>
    )
}
export default videoList;