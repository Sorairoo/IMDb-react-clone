import './App.css';
import React,{Component} from 'react';
import VideoList from './components/movie_list';
const APIKEY='';
const APIURL="http://www.omdbapi.com";
class  App extends Component {
  constructor(props){
    super(props);
    this.state = {
       movies :  [],
       totalCount: 0
    }
    
  }
  fetchMovies(search = '=back to the future') {

    return fetch(APIURL + '?apikey=' + APIKEY +'&s='+ search).then( res => res.json());
      
  };
  render(){
    return (
      <div className="App">
      <h1>My favorite movies</h1>
      <VideoList movies={this.state.movies}/>
     </div>
    );
  }
  componentDidMount(){
    this.fetchMovies().then(res => {
      this.setState({
        movies : res.Search
      })
    })
  }
}

export default App;
