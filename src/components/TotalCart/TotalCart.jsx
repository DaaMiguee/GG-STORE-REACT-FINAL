import "./TotalCart.css"
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const TotalCart = () => {
    const { cart } = useContext(CartContext)
        //cuncion para calculr total
    const totalCalc =() =>{
        return cart.reduce((acc, item) =>{
            return acc + item.price * item.quantity
        }, 0)
    }
    return(
        <div className='total-cart'>
            <h4>Total:</h4>
            <h3>$ {totalCalc().toLocaleString('es-AR')}</h3>
        </div>
    )
}

export default TotalCart