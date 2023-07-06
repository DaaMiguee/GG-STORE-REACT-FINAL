import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartProducts from '../CartProducts/CartProducts';
import "./CartContainer.css";
import TotalCart from '../TotalCart/TotalCart';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { CartContext } from '../../context/CartContext';

const CartContainer = () => {
    const { setCart, setCount, cart } = useContext(CartContext);
    const navigate = useNavigate();

    const ClearContext = () =>{
        setCart([]);
        setCount(0);
    }

    const itemsCount = () => {
        const itemQuantity = cart.reduce((acc, el) => acc + el.quantity, 0);
        return <span>{itemQuantity}</span>;
    }

    const calculateTotal = () => {
        const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        return totalAmount;
    };

    const handleCheckout = () => {
        const total = calculateTotal();
        navigate('/checkout', { state: total });
    };

    return (
        <div>
            {cart.length === 0 ? (
                <div>
                    <span className='empty-cart'>El carrito está vacío</span>
                    <ButtonComponent className="empty-cart-button" to="/store" label="Ir a comprar"/>
                </div>
            ) : (
                <div className='cart-template'>
                    <div className='cart-products-container'>
                        <h1>Carrito de Compras</h1>
                        <CartProducts/>
                    </div>
                    <div className='total-container'>
                        <h2 className='resumen'>Resumen de la compra ({itemsCount()} items)</h2>
                        <TotalCart/>
                        <button className="order-now btn" onClick={handleCheckout}>Finalizar Compra</button>
                        <ButtonComponent className="btn2" to="/store" label="Elegir más productos"/>
                        <button className='cart-delete btn2' onClick={ClearContext}>Vaciar Carrito</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartContainer;
