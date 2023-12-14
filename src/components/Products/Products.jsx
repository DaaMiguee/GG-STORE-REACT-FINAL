import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./Products.css"
import LoaderComponent from '../LoaderComponent/LoaderComponent';
const Products = ({productsData}) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const handleImagesLoad = () => {
        setImagesLoaded(true);
    };

    const totalCost = (product) => {
        const precioInicial = product.price;
        const porcentajeDescuento = product.discount;
        const descuento = precioInicial * (porcentajeDescuento / 100);
        const precioFinal = precioInicial - descuento;
        return precioFinal;
        };

    if (productsData.length === 0) {
        return <div className='no_products'>
            <h1>No se encontraron productos</h1>
        </div>;
    } else {
        return productsData.map((product) => {
            return (
                <div className='store_card_container' key={product.id}>
                    <div className='img_container'>
                    <img
                    className={"zoom_img"}
                    src={product.images}
                    alt={`imagen de ${product.title}`}
                    onLoad={handleImagesLoad}
                />
                  {!imagesLoaded && <LoaderComponent />} {/* Muestra el loader mientras las imágenes se cargan */}
                    </div>
                    <h3>{product.title}</h3>
                    <div className='price_container'>
                        <span className={`${product.discount > 0 ? "discount" : "discount0"}`}>
                        {`${product.discount}`}
                        </span>
                        <span className={`${product.discount > 0 ? 'price' : 'discount0'}`}>
                        ${product.price.toLocaleString('es-AR')}
                        </span>
                        <span className='price_wd'>${Math.floor(totalCost(product)).toLocaleString('es-AR')}</span>
                    </div>
                    <div className='card_desc overlay'>
                        <Link className='item_info' to={`/item/${product.id}`}>Comprar</Link>
                    </div>
                </div>
            );
        });
    }
}   

export default Products