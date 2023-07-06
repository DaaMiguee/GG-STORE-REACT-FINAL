import React from 'react'
//css
import "./itemdetailcontainer.css"
//components
import CardsDetail from '../CardsDetail/CardsDetail'

const ItemDetailContainer = ({productsData}) => {
    return (
        <div className='cards-detail-container'>
            {
                productsData.map((product) => {
                    return <CardsDetail key={product.id} productsData={product}/>
                    
                })

            }
        </div>
    )
}

export default ItemDetailContainer