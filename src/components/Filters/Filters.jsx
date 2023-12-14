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
    
    const [filtersActive, setFiltersActive] = useState(false);
    const handleFilters = () =>{
        setFiltersActive(!filtersActive)
    }
    const classfFiltersContainer = !filtersActive ? "all-filters" : "showFilters";

    return (
        <section className='filters'>
            <h2 onClick={handleFilters}>Filtrar</h2>
            <div className={classfFiltersContainer} >
                <div>
                    <label htmlFor={categoryFilterId}>Categoria:</label>
                    <br />
                    <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
                        <option value="all">Todas</option>
                        <option value="smartphones">Celulares</option>
                        <option value="tablets">Tablets</option>
                    </select>
                </div>
                <div>
                    <label htmlFor={brandFilterId}>Marca:</label>
                    <br />
                    <select name="" id={brandFilterId} onChange={handleChngeBrand}>
                        <option value="all">Todas</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Motorola">Motorola</option>
                        <option value="Xiaomi">Xiaomi</option>
                        <option value="Apple">Apple</option>
                    </select>
                </div>
                <div>
                    <label htmlFor={minPriceFilterId}>Precio desde:</label>
                    <br />
                    <input className='rango' type="range" id={minPriceFilterId} min="0" max="680000" onChange={handleChangeMinPrice}/>
                    <br />
                    <span> $ {minPrice}</span>
                </div>
            </div>
        </section>
    )
}

export default Filters