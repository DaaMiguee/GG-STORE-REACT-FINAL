import React, { useContext, useState } from 'react'
//css
import "./cartdetailbuttons.css"
//context
import { CartContext } from '../../context/CartContext'
const CartDetailButtons = () => {
    const {count, setCount} = useContext(CartContext);
    const [state, setState] = useState(0);
    const handeClckplus = () =>{
        if (state >= 0 && state -20){
            setCount (count + 1);
            setState (state + 1);
        };
    };
    const handleClickMinus = () =>{
        if (state > 0){
            setCount (count - 1);
            setState (state - 1);
        };
    };
    return (
        <div>
            <button className='btn-minus' onClick={handleClickMinus} >-</button>
            <span className='amt'>{state}</span>
            <button className='btn-plus' onClick={handeClckplus}>+</button>
        </div>
    )
}

export default CartDetailButtons