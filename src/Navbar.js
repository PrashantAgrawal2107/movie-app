import { Component } from "react";
import styled from 'styled-components';

const Nav = styled.div`
  width : 100%;
  background: #4267b2;
  height: 70px;
  display: flex;
  justify-content: space-between;
`

const Title = styled.div`
font-size : 30px;
color: #fff;
font-weight : 600;
font-family : Montserrat , sans-serif;
margin-left : 20;
padding : 15px;
&:hover{color : #0f0}
`

const CartContainer = styled.div`
position : relative;
cursor : pointer
`

const CartIcon = styled.img`
height : 40px;
margin-right : 20px;
margin-top : 12px
`

const CartCount = styled.span`
background-color : ${(props)=>props.color};
border-radius : 50%;
padding : 4px 8px;
position: absolute;
right: 10px;
top: 0px;
font-size : 12px;
visibility : ${(props)=>props.show?"visible":"hidden"}
`


class Navbar extends Component{
    render(){
        return (
            <>
            <Nav>
                <Title>MovieFlix</Title>
                <CartContainer>
                    <CartIcon src="https://cdn-icons-png.flaticon.com/128/7529/7529531.png" alt="cart-icon"/>
                    <CartCount color="yellow" show={true}>4</CartCount>
                </CartContainer>
            </Nav>
            </>
        )
    }
}

export default Navbar;
