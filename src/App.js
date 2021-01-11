import './App.css';
import React,{Component} from 'react';
import VideoList from './components/movie_list';
import NavBar from './components/nav_bar';
const APIKEY='git';
const APIURL="http://www.omdbapi.com";
class  App extends Component {
  constructor(props){
    super(props);
    this.state = {
       movies :  [],
       totalCount: 0
    }
    
  }
  fetchMovies =  (search = '') => {

    return fetch(APIURL + '?apikey=' + APIKEY +'&s='+ search).then( res => res.json());
      
  };
  render(){
    return (
      <div className="App container">
        <NavBar onSearchTerm = {this.searchMovies}></NavBar>
      <h1>My favorite movies</h1>
      <VideoList movies={this.state.movies}/>
     </div>
    );
  }
  searchMovies = (term = '') =>{
    if(term.length< 3){
      return
    }
    this.fetchMovies(term).then(res => {
      console.log(this)
     this.setState({
       movies : res.Search,
       totalCount : res.totalResults,
     })
   })

 };
  componentDidMount(){
    this.searchMovies('')

  }
}

export default App;
