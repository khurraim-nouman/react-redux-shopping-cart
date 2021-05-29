import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { connect } from 'react-redux'

const Navbar = ({cart}) => {

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });

        setCartCount(count);

    }, [cart, cartCount])

    return (
        <nav>
            
                <h1>Redux Shopping Cart</h1>
            
            <Link to='/cart'>
            <div className='CartArea'>
                <img
                src='https://image.flaticon.com/icons/png/512/263/263142.png'
                alt=' Not Found'
                />
                 <h2>Cart : <span>{cartCount}</span></h2>
            </div>
            </Link>
          


        </nav>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    };
}

export default connect(mapStateToProps)(Navbar);