import React, { useContext } from 'react'
//Link Router Dom
import { Link } from 'react-router-dom'
//css
import "./cards.css"
import { CartContext } from '../../context/CartContext'

const Cards = () => {
    const { productsData } = useContext(CartContext);

    const precioFinalCalc = () => {
        const precioInicial = productsData.price;
        const porcentajeDescuento = productsData.discount;
        const descuento = precioInicial * (porcentajeDescuento / 100);
        const precioFinal = precioInicial - descuento;
        return precioFinal;
    };
    
    return (
        <div className='card-container'>
            <img className='zoom-img' src={productsData.images} alt=''></img>
            <h3>{productsData.title}</h3>
            <div className='price-container'>
                <span className={`${productsData.discount > 0 ? "discount" : "discount0"}`}>
                    {`${productsData.discount}`}
                </span>
                <span className={`${productsData.discount > 0 ? 'price' : 'discount0'}`}>
                    ${productsData.price.toLocaleString('es-AR')}
                </span>
                <span className='price-wd'>${Math.floor(precioFinalCalc()).toLocaleString('es-AR')}</span>
            </div>
            <div className='card-desc overlay'>
                <Link className='item-info' to={`/item/${productsData.id}`}>Comprar</Link>
            </div>
        </div>
    )
}

export default Cards