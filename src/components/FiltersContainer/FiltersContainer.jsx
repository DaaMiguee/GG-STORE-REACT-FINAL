import React from 'react'
import Filters from '../Filters/Filters'
import "./FiltersContainer.css"

const FiltersContainer = ({changeFilters}) => {
    return (
        <div className='filters-container'>
            <Filters onChange={changeFilters}/>
        </div>
    )
}

export default FiltersContainer