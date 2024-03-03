import React from "react";

export default class MovieCard extends React.Component{

    // // addStars(){
    // //     console.log(this.state);
    // // }

    // //  Arrow function automatically binds 'this'....no need explicit binding.
    // addStars = ()=>{

    //     if(this.state.stars>=5){
    //         return ;
    //     }
    //     // setState() update the value as well as rerender the Component automatically....

    //     // setState() can be used in two forms-->>

    //     // FORM 1-->>
    //     // this.setState({
    //     //     stars : this.state.stars+=0.5
    //     // });

    //     // FORM 2-->>
    //     this.setState((prevState)=>{
    //         return {
    //             stars : prevState.stars+=0.5
    //         }
    //     })

    //     // this.state.stars+=0.5; // Can't simply do like this, we also have to rerender the Component
    //     console.log(this.state);
    // }

    // minusStars = ()=>{
    //     if(this.state.stars<=0){
    //         return ;
    //     }
    //     this.setState((prevState)=>{
    //         return {
    //             stars : prevState.stars-=0.5
    //         }
    //     })
    //     console.log(this.state);
    // }

    // handleFavorite =()=>{
    //     this.setState({
    //         fav : !this.state.fav
    //     })
    // }

    // handleCart =()=>{
    //     this.setState({
    //         cart : !this.state.cart
    //     })
    // }

    render(){
        // const {title,plot,price,rating,stars,fav,cart} = this.props;
        const {movies} = this.props;
        const {title,plot,poster,price,rating,stars,fav,cart} = movies;
        const {addStars , minusStars, handleFavorite, handleCart} = this.props;

        return (
            <>
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src={poster} alt="poster"/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img src="https://cdn-icons-png.flaticon.com/128/2732/2732689.png" alt="minus" className="str-btn" onClick={()=>minusStars(movies)}/>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" className="stars"/>
                                <img src="https://cdn-icons-png.flaticon.com/128/748/748113.png" alt="plus" className="str-btn" onClick={()=>addStars(movies)}/>
                                <span className="starCount">{stars}</span>
                            </div>
                           {fav ? <button className="unfavourite-btn" onClick={()=>handleFavorite(movies)}>Unfavorite</button> :
                                   <button className="favourite-btn" onClick={()=>handleFavorite(movies)}>Favourite</button>}
                                   
                            {<button className={cart?"unfavourite-btn":"cart-btn"} onClick={()=>handleCart(movies)}>{cart?"Remove":"Add to Cart"}</button>}
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}