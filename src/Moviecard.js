import React from "react";

export default class MovieCard extends React.Component{
    constructor(){
        super();
        this.state = {
            title : " Sita Ramam",
            plot:"A true Love Story.",
            price : "Rs. 299",
            rating : 9.5,
            stars : 0
        }
        // Binding this to addStars to prevent loosing "this"....otherwise , this will become undefind.
        // this.addStars = this.addStars.bind(this); // No need of binding...we are using arrow function now.
    }

    // addStars(){
    //     console.log(this.state);
    // }

    //  Arrow function automatically binds 'this'....no need explicit binding.
    addStars = ()=>{

        if(this.state.stars>=5){
            return ;
        }
        // setState() update the value as well as rerender the Component automatically....

        // setState() can be used in two forms-->>

        // FORM 1-->>
        // this.setState({
        //     stars : this.state.stars+=0.5
        // });

        // FORM 2-->>
        this.setState((prevState)=>{
            return {
                stars : prevState.stars+=0.5
            }
        })

        // this.state.stars+=0.5; // Can't simply do like this, we also have to rerender the Component
        console.log(this.state);
    }

    minusStars = ()=>{
        if(this.state.stars<=0){
            return ;
        }
        this.setState((prevState)=>{
            return {
                stars : prevState.stars-=0.5
            }
        })
        console.log(this.state);
    }

    render(){
        const {title,plot,price,rating,stars} = this.state;

        return (
            <>
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src="https://media.themoviedb.org/t/p/w500/g3hk2wEeIsTGhh7JvK8yWFVR7ue.jpg" alt="poster"/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img src="https://cdn-icons-png.flaticon.com/128/2732/2732689.png" alt="minus" className="str-btn" onClick={this.minusStars}/>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" className="stars"/>
                                <img src="https://cdn-icons-png.flaticon.com/128/748/748113.png" alt="plus" className="str-btn" onClick={this.addStars}/>
                                <span className="starCount">{stars}</span>
                            </div>
                            <button className="favourite-btn">Add to fav</button>
                            <button className="cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}