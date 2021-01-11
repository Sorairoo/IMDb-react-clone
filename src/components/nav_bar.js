import React from 'react';
import SearchBar from './search_bar'

function navBar(props){
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <a className="navbar-brand" href="/">Search a film</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
    
      
    </ul>
    <SearchBar onSearchMovie = {props.onSearchTerm}/>

  </div>
</nav>
    );
}
export default navBar;