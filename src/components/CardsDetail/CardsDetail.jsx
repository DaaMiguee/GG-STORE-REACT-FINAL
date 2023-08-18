import React, { useContext, useState } from 'react'
//css
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./cardsdetail.css"
//bootstrap
import Carousel from 'react-bootstrap/Carousel';
//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CardsDetail = ({productsData}) => {
    const { addToCart } = useContext(CartContext);

    const notify = () => {
        toast.success('Agregado al Carrito', {
            position: "top-center",
            autoClose: 300,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            closeButton: false,
            theme: "dark",
            });
    }
    //funcion calcular precio con descuento
    const totalCost = () => {
        const precioInicial = productsData.price;
        const porcentajeDescuento = productsData.discount;
        const descuento = precioInicial * (porcentajeDescuento / 100);
        const precioFinal = precioInicial - descuento;
        return precioFinal;
    };
    //funcion calcular ahorro
    const ahorroCalc = () =>{
        const ahorro =(productsData.price - totalCost());
        return ahorro;
    };
    //agregar al carrito  //count = contador //state = estado cartwidget
    const {count, setCount} = useContext(CartContext);
    const [state, setState] = useState(0);
    const handeClckplus = () =>{
        if (state >= 0 && state < productsData.stock){
            setCount (count + 1);
            setState (state + 1);
        }else if(productsData.stock === 0){
            console.log("No hay mas productos en el stock");
        }
    };
    return (
        <section className='card-details'>
            <ToastContainer />
            <section className='card-detail-sub-container'>
                <div className='card-detail-img-container'>
                    <div className="col-100" style={{ height: 'auto', overflow: 'hidden' }}>
                    <span className={`${productsData.discount > 0 ? "discount-detail" : "discount0"}`}>{productsData.discount} % descuento</span>
                        <Carousel 
                        slide={false} 
                        prevIcon={<FontAwesomeIcon icon={faChevronLeft} style={{color:"#2189ff"}}/>}
                        nextIcon={<FontAwesomeIcon icon={faChevronRight} style={{color:"#2189ff"}}/>}
                        >
                        {Array.isArray(productsData.images) ? (
                            productsData.images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img className="carousel-img" src={image} alt={`imagen ${index + 1}`} />
                            </Carousel.Item>
                            ))
                        ) : (
                            <Carousel.Item>
                            <img className="carousel-img" src={productsData.images} alt="imagen" />
                            </Carousel.Item>
                        )}
                        </Carousel>
                    </div>
                </div>
                <div className='card-detail-desc'>
                    <span className='stock'>{`Disponible ${productsData.stock}`}</span>
                    <img className='brand' src={productsData["brand-img"]} alt="" />
                    <h3>{productsData.title}</h3>
                    <div className='price-container'>
                        <div className='price-cont-a'>
                            <span className='price-wd'>${Math.floor(totalCost()).toLocaleString('es-AR')}</span>
                        </div>
                        <div className='price-cont-b'>
                            <span className={`${productsData.discount > 0 ? "price" : "discount0"}`}>${productsData.price.toLocaleString('es-AR')}</span>
                            <span className={`${productsData.discount > 0 ? "ahorro" : "discount0"}`}>Ahorra ${Math.floor(ahorroCalc()).toLocaleString('es-AR')}</span>
                        </div>
                    </div>
                    <div className='detail-btn-container'>
                        <Link className='btn-buy ' onClick={() => {addToCart(productsData); handeClckplus()}} to="/cart">Comprar Ahora</Link>
                        <button className='btn-add-cart'onClick={() => {addToCart(productsData); handeClckplus(); notify()}} >Agregar al Carrito</button>
                    </div>
                    <div className='payment-methods'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/proyect-images.appspot.com/o/images%2F0.webp?alt=media&token=3ebb90c2-42ed-4af7-97d4-c831f93a1397" alt="mastercard" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/proyect-images.appspot.com/o/images%2F1.webp?alt=media&token=d9497f5f-525b-4194-932f-d6f3988f58ab" alt="visa" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/proyect-images.appspot.com/o/images%2F2.webp?alt=media&token=4c6797b1-4012-432d-8dc1-ea597138b6f3" alt="american express" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/proyect-images.appspot.com/o/images%2F3.webp?alt=media&token=265e3bda-f6f5-4772-93dd-0263e773cd3f" alt="cabal" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/proyect-images.appspot.com/o/images%2F4.webp?alt=media&token=604180b2-de0d-4d6f-8176-c894c3021655" alt="naranja x" />
                    </div>
                </div>
            </section>
            <section className='card-detail-specs-container'>
                <div className='card-detail-specs'>
                    <h2>Descripcion</h2>
                    <img src="" alt="" />
                    <p>{productsData.description}</p>
                </div>
            </section>
        </section>
    )
}

export default CardsDetail