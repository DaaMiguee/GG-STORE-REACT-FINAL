import React from 'react'
import Filters from '../Filters/Filters'
import "./FiltersContainer.css"

const FiltersContainer = ({changeFilters}) => {
    return (
        <div className='filters-container'>
            <h2>Filtrar</h2>
            <Filters onChange={changeFilters}/>
        </div>
    )
}

export default FiltersContainer