import MovieCard from "./Moviecard";

function MovieList(props){

        // const {title,plot,price,rating,stars,fav,cart} = this.state;
        const {movies , addStars , decStars , toggleFav, toggleCart} = props;
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
                                            addStars={addStars}
                                            minusStars={decStars}
                                            handleCart={toggleCart}
                                            handleFavorite={toggleFav}
                                            key={movie.id}
             />)}
            </>
        )
    
}

export default MovieList;