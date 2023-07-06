import React, { useContext } from 'react'
//css
import "./cardwidget.css"
//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartCount from '../CartCount/CartCount'
const CartWidget = () => {
    const { cart } = useContext(CartContext);
    return (
        <Link className='cart-button' to="/cart">
            <FontAwesomeIcon icon={faBagShopping} />
            {cart.length === 0 ? (
            <span style={{display: "none"}}></span>) :(
            <CartCount/>
            )}
        </Link>
    )
}

export default CartWidget