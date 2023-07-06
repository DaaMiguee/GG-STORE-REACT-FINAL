import React, { useId, useState } from 'react'
import "./Filters.css"

const Filters = ({onChange}) => {
    const [minPrice, setMinPrice] = useState(0);
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    const brandFilterId = useId()

    const handleChangeMinPrice = (e) =>{
        setMinPrice(e.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }
    const handleChangeCategory = (e) =>{
        onChange(prevState =>({
            ...prevState,
            category: e.target.value
        }))
    }
    const handleChngeBrand = (e) =>{
        onChange(prevState =>({
            ...prevState,
            brand: e.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor={categoryFilterId}>Categoria:</label>
                <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="smartphones">Celulares</option>
                    <option value="tablets">Tablets</option>
                </select>
            </div>
            <div>
                <label htmlFor={brandFilterId}>Marca:</label>
                <select name="" id={brandFilterId} onChange={handleChngeBrand}>
                    <option value="all">Todas</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Motorola">Motorola</option>
                    <option value="Xiaomi">Xiaomi</option>
                    <option value="Apple">Apple</option>
                </select>
            </div>
            <div>
                <label htmlFor={minPriceFilterId}>Precio Minimo:</label>
                <input className='rango' type="range" id={minPriceFilterId} min="0" max="680000" onChange={handleChangeMinPrice}/>
                <span> $ {minPrice}</span>
            </div>
        </section>
    )
}

export default Filters