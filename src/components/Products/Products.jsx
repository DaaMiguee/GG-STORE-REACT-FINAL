import React from 'react'
import { Link } from "react-router-dom";
import "./Products.css"
const Products = ({productsData}) => {

    const precioFinalCalc = (product) => {
        const precioInicial = product.price;
        const porcentajeDescuento = product.discount;
        const descuento = precioInicial * (porcentajeDescuento / 100);
        const precioFinal = precioInicial - descuento;
        return precioFinal;
        };

    if (productsData.length === 0) {
        return <div className='no-products'>
            <h1>No se encontraron productos</h1>
        </div>;
    } else {
        return productsData.map((product) => {
            return (
                <div className='card-container' key={product.id}>
                    <img className='zoom-img' src={product.images} alt=''></img>
                    <h3>{product.title}</h3>
                    <div className='price-container'>
                        <span className={`${product.discount > 0 ? "discount" : "discount0"}`}>
                        {`${product.discount}`}
                        </span>
                        <span className={`${product.discount > 0 ? 'price' : 'discount0'}`}>
                        ${product.price.toLocaleString('es-AR')}
                        </span>
                        <span className='price-wd'>${Math.floor(precioFinalCalc(product)).toLocaleString('es-AR')}</span>
                    </div>
                    <div className='card-desc overlay'>
                        <Link className='item-info' to={`/item/${product.id}`}>Comprar</Link>
                    </div>
                </div>
            );
        });
    }
}   

export default Products