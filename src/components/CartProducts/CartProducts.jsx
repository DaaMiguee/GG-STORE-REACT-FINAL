import { CartContext } from "../../context/CartContext";
import React from 'react'
import { useContext } from "react";
import "./CartProducts.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";

const CartProducts = () => {
    const { cart, removeProduct, updateQuantity, count, setCount, state, setState} = useContext(CartContext)
    const handleRemoveProduct = (productId) => {
        removeProduct(productId);
    };
    //funcion para calcular subtotal
    const subtotal = (product) =>{
        return precioFinalCalc(product) * product.quantity
    }
    const handleIncreaseQuantity = (productId) => {
        updateQuantity(productId, 1); // incrementa quantity en 1
        
        };
    const handleDecreaseQuantity = (productId) => {
        updateQuantity(productId, -1); // disminuir quantity en 1
        };
            //funcion calcular precio con descuento
    const precioFinalCalc = (product) => {
        const precioInicial = product.price;
        const porcentajeDescuento = product.discount;
        const descuento = precioInicial * (porcentajeDescuento / 100);
        const precioFinal = precioInicial - descuento;
        return precioFinal;
    };

    const handeClckplus = () =>{
        if (state >= 0){
            setCount (count + 1);
            setState (state + 1);
        };
    };
    const handeClckMinus = () =>{
        if (count > 1 && state >1){
            setCount (count - 1);
            setState (state - 1);
        };
    };
    const notify = () => {
        toast.success('Eliminado del Carrito', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            closeButton: false,
            theme: "dark",
            });
    }
    return cart.map((product) =>{
        return(
            <div key={product.id} className="cart-item-container">
            <ToastContainer />
                <img src={product.images} alt="imagen" />
                <div className="cart-item-title">{product.title}</div>
                <div className='cart-price-container'>
                        <div className='cart-price-cont-a'>
                            <span className='cart-price-wd'>$ {Math.floor(precioFinalCalc(product)).toLocaleString('es-AR')}</span>
                        </div>
                        <div className='cart-price-cont-b'>
                            <span className={`${product.discount > 0 ? "cart-price" : "discount0"}`}>$ {product.price.toLocaleString('es-AR')}</span>
                        </div>
                    </div>
                <div className="quantity-container">
                    <span className="quantity-minus" onClick={()=>{handleDecreaseQuantity(product.id); handeClckMinus()}}>
                        <FontAwesomeIcon icon={faMinus} />
                    </span>
                    <div className="cart-item-quantity">{product.quantity}</div>
                    <span className="quantity-plus" onClick={()=>{handleIncreaseQuantity(product.id); handeClckplus()}}>
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                </div>
                <span className="subtotal">$ {subtotal(product).toLocaleString('es-AR')}</span>
                <span className="remove-icon" onClick={() => {handleRemoveProduct(product.id); notify()}}>{<FontAwesomeIcon icon={faTrashCan} />}</span>
            </div>
        )
    })
}

export default CartProducts