import MovieCard from "./Moviecard";
import MovieList from "./MovieList";
// import Student from "./Student";
import Navbar from "./Navbar";
import { Component } from "react";
import { movies } from "./moviesData";


class App extends Component{
  constructor(){
    super();
    this.state = {
       movies : movies,
       cartCount : 0
    }
    // Binding this to addStars to prevent loosing "this"....otherwise , this will become undefind.
    // this.addStars = this.addStars.bind(this); // No need of binding...we are using arrow function now.
}

handleIncStar = (movie)=>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);
    if(movies[movieId].stars <5){
        movies[movieId].stars += 0.5
    }

    this.setState({
        movies
    });
}

handleDecStar = (movie)=>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);
    if(movies[movieId].stars >0){
        movies[movieId].stars -= 0.5
    }

    this.setState({
        movies : movies
    });
}

handleFav = (movie)=>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].fav = !movies[movieId].fav;
    this.setState({
        movies
    })
}

handleCart=(movie)=>{
    let {movies , cartCount} = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].cart = !movies[movieId].cart;

    if(movies[movieId].cart){
      cartCount++;
    }else{
      cartCount--;
    }
    this.setState({
        movies,
        cartCount
    })
}
  render(){
    const {movies , cartCount} = this.state;
    return (
      <>
      {/* <h1>MovieFlix</h1> */}
      <Navbar cartCount={cartCount}/>
      {/* <MovieCard/> */}
      <MovieList movies={movies} 
                 addStars={this.handleIncStar}   
                 decStars={this.handleDecStar}
                 toggleFav={this.handleFav}   
                 toggleCart={this.handleCart}
      />

      {/* This is just for props demo
      <Student name="Prashant" marks="80"/>
      <Student name="Ravi" marks="90"/>
      <Student name="Prateek" marks="95"/>
      <Student/> */}

      </>
      );
  }
  
}

// Student.defaultProps = {
//   name : "Student",
//   marks : "N.A."
// }

export default App;
