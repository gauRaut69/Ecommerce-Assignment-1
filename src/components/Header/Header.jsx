import React, { useContext } from 'react'
// import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../cartContext/cartContext';
import './Header.css'

const Header = () => {
    const {cardData} = useContext(CartContext);
    const navigate = useNavigate();

  return (
    <div className='header'>
        <div className="logo">
            <img src="../../Image/logo.png" alt="" />
            <h1>Game Zone</h1>
        </div>
        <div className="cart" onClick={()=> {navigate('/cart')}}>
            <FaShoppingCart />
            <span className="cart-count">{cardData.length}</span>
        </div>
    </div>
  )
}

export default Header