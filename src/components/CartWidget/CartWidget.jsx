import React, { useContext, useEffect, useState } from 'react'
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
    const [widgetStyle, setWidgetStyle] = useState({
        color: '#ffffff',
        fontSize: '1.5rem',
        paddingTop:"10px",
        paddingTopBottom:"15px",
    })
    useEffect(() =>{
        const handleScroll = () => {
            if(window.scrollY > 0){
                setWidgetStyle({
                    color: '#000000',
                    fontSize: '1.4rem',
                    paddingTop:"2px",
                    paddingTopBottom:"15px",
                })
            }else{
                setWidgetStyle({
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    paddingTop:"10px",
                    paddingTopBottom:"15px",
                });
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        
    }, []);
    return (
        <Link className='cart-button' to="/cart" style={widgetStyle}>
            <FontAwesomeIcon icon={faBagShopping} className='cart-svg'/>
            {cart.length === 0 ? (
            <span style={{display: "none"}}></span>) :(
            <CartCount/>
            )}
        </Link>
    )
}

export default CartWidget