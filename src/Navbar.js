import styles from './nav.module.css'
import styled from 'styled-components';

const CartCount = styled.span`
background-color : ${(props)=>props.color};
border-radius : 50%;
padding : 4px 8px;
position: absolute;
right: 10px;
top: 0px;
font-size : 12px;
visibility : ${(props)=>props.count?"visible":"hidden"}
`

function Navbar(props) {
  
    const {cartCount} =  props;
       
      return (
      <>
      <div className={styles.nav}>
        
      <div className={styles.title}>MOVIE APP</div>
        
        <div className={styles.cartIconContainer}>
            <img className={styles.cartIcon} 
                 alt="Cart-Icon" 
                 src = "https://cdn-icons-png.flaticon.com/128/7529/7529531.png"    
            />
            {/* <span className ={styles.cartCount}>{cartCount}</span> */}
            <CartCount color="orange" count={cartCount}>{cartCount}</CartCount>
        </div>
      </div>

      </>
      )
    }
  
 
  
  export default Navbar;