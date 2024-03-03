import { Component } from "react";
import MovieCard from "./Moviecard";

export default class MovieList extends Component{
    constructor(){
        super();
        this.state = {
            movies : [
                {
                    title : " Sita Ramam",
                    plot:"A true Love Story.",
                    poster:'https://media.themoviedb.org/t/p/w500/g3hk2wEeIsTGhh7JvK8yWFVR7ue.jpg',
                    price : "Rs. 299",
                    rating : 9.5,
                    stars : 0,
                    fav:false,
                    cart:false
                },
                {
                    title: 'The Avengers',                  
                    plot:
                      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                    poster:
                      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                    rating: '8.0',            
                    price: "Rs. 99",            
                    stars: 0,
                    fav: false,
                    cart: false                  
                  },
                  {
                    title: 'The Dark Knight',                  
                    plot:
                      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                    poster:
                      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                    rating: '9.0',            
                    price: "Rs. 199",            
                    stars: 0,            
                    fav: false,
                    cart: false                  
                  },
                  {
                    title: 'Iron Man',                 
                    plot:
                      'After being held captive in an Afghan cave, billionaire engineer Tony starsk creates a unique weaponized suit of armor to fight evil.',                  
                    poster:
                      'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                    rating: '7.9',            
                    price: "Rs. 139",            
                    stars: 0,            
                    fav: false,
                    cart: false                  
                  }
            ]
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

    handleDeccStar = (movie)=>{
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
        const {movies} = this.state;
        const movieId = movies.indexOf(movie);
        movies[movieId].cart = !movies[movieId].cart;
        this.setState({
            movies
        })
    }

    render(){
        // const {title,plot,price,rating,stars,fav,cart} = this.state;
        const {movies} = this.state;
        return (
            <>
            <h1>Movie List</h1>
            {/* <MovieCard title={title} 
                       plot={plot} 
                       price={price} 
                       rating={rating} 
                       stars={stars} 
                       fav={fav} 
                       cart={cart} 
            /> */}
            {movies.map((movie)=><MovieCard movies={movie}
                                            addStars={this.handleIncStar}
                                            minusStars={this.handleDeccStar}
                                            handleCart={this.handleCart}
                                            handleFavorite={this.handleFav}
                                        
             />)}
            </>
        )
    }
}