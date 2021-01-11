import React from 'react';

function movieItem(props){
    return(
        
        <div className="card col-3" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.movie.Poster} alt={props.movie.Title}/>
            <div className="card-body">
                <h5 className="card-title">{props.movie.Title}</h5>
    
            </div>
        </div>
    );
}
export default movieItem;