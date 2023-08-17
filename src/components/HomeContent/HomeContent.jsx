import React from 'react'
//css
import "./homecontent.css"
//components
import ButtonComponent from "../ButtonComponent/ButtonComponent"
//img
import image002 from "../../img/amazfit-gts-2.jpg"
import image003 from "../../img/redmi-note-11-pro-5g-6gb128gb.jpg"
import image004 from "../../img/xiaomi-redmi-note-12s-8256.jpg"
import image005 from "../../img/haylou-t15.jpg"

const MainContent = () => {

    return (
        <div>
            <section className='home-new'>
                <div className='home-new-cont'>
                    <img src= "https://firebasestorage.googleapis.com/v0/b/proyect-images.appspot.com/o/images%2Fs23u_2.jpg?alt=media&token=35dc0724-7036-44f1-84a5-a8e65da0ec6f" alt='imagen de matebook'></img>
                    <div className='home-new-desc'>
                        <h5>6,8 pulgadas</h5>
                        <h3>Samsung S23 Ultra</h3>
                        <h4>Qualcomm Snapdragon 8 Gen 2 | Dynamic AMOLED curvada de 6,8 pulgadas | 256GB</h4>
                        <ButtonComponent className="portada-home-link" label="Conoce más" to={`/item/v90x6E5gV5YB99OhrLx0`}/>
                    </div>
                </div>
            </section>
            <section className='news-container'>
                <h2>Elegidos del mes</h2>
                <div className='product-details'>
                    <img src={image002} alt=''></img>
                    <h3>AMAZFIT GTS 2</h3>
                    <span>15% de descuento en compras online</span>
                    <div className='news-link-container'>
                        <ButtonComponent 
                            className="news-product-info" 
                            label ="Ir a Detalles"
                            to={`/product/5003`}
                            />
                    </div>
                    
                </div>
                <div className='product-details'>
                    <img src={image003} alt=''></img>
                    <h3>REDMI NOTE 11 PRO 5G</h3>
                    <span>15% de descuento en compras online</span>
                    <div className='news-link-container'>
                        <ButtonComponent 
                            className="news-product-info" 
                            label ="Conoce más"
                            to={`/product/7053`}
                            />
                    </div>
                </div>
                <div className='product-details'>
                    <img src={image004} alt=''></img>
                    <h3>XIAOMI REDMI NOTE 12S 8/256</h3>
                    <span>15% de descuento en compras online</span>
                    <div className='news-link-container'>
                        <ButtonComponent 
                            className="news-product-info" 
                            label ="Conoce más"
                            to={`/product/7745`}
                            />
                    </div>
                </div>
                <div className='product-details'>
                    <img src={image005} alt=''></img>
                    <h3>AURICULARES HAYLOU T15</h3>
                    <span>15% de descuento en compras online</span>
                    <div className='news-link-container'>
                        <ButtonComponent 
                            className="news-product-info" 
                            label ="Conoce más"
                            to={`/product/5040`}
                            />
                    </div>
                </div>
            </section>
            <section className='news-container-c'>
                <div className='side-a'>
                    <div>
                        <h5>Se pasa de Pro</h5>
                        <h3>Iphone 14 Pro Max</h3>
                        <h4>Dynamic Island | Apple A16 Bionic | Pantalla Oled de 6,8 pulgadas | 256GB | 512Gb | 1Tera</h4>
                        <ButtonComponent className="portada-home-link" label ="Conoce más" to={`/item/HtIjmsNxgLYdd9qrR7f2`}/>
                    </div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/proyect-images.appspot.com/o/images%2Fi14pm_2.jpg?alt=media&token=284b8d8b-7f44-4799-944c-513666662d26" alt="" />
                </div>
            </section>
        </div>
    )
}

export default MainContent