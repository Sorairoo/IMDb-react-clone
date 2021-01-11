import React, {Component} from 'react';


export default class SearchBar extends Component {
    constructor(props){
        super(props);
       
        this.state = {
            term: ''
        }
    }
    
    searchClicked = (evt) => {
        evt.preventDefault();
         this.props.onSearchMovie(this.state.term);
         this.setState({term:''});

    };
    handleChange=(e) => {
        this.setState({ term: e.target.value });
    };
    
    render(){

    return  (
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2"
        
         type="search" onChange={ this.handleChange }
          placeholder="Search" aria-label="Search"/>

        <button onClick = { this.searchClicked } className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

      </form>
    )
}
}