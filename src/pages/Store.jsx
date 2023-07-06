import React, { useContext } from 'react';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';
import FiltersContainer from '../components/FiltersContainer/FiltersContainer';
import Products from '../components/Products/Products';
import { CartContext } from '../context/CartContext';
import FooterComponent from '../components/FooterComponent/FooterComponent';

const Store = () => {
    const { productsData, loading, filters, setFilters } = useContext(CartContext);
    const filterProducts = (productsData) =>{
        return productsData.filter(product =>{
            return(
                product.price >= filters.minPrice &&
                (
                    (filters.brand === "all" ||
                    product.brand === filters.brand) &&
                    (filters.category === "all" ||
                    product.category === filters.category)
                )
                )
            })
    }
    const filteredProducts = filterProducts(productsData)

    return (
        <section>
            {loading ? <LoaderComponent/> :
            <section>
                <FiltersContainer changeFilters ={setFilters}/>
                <div className='cards-container'>
                    <Products productsData={filteredProducts}/>
                </div>
            </section>}
            <FooterComponent/>
        </section>
    )
}

export default Store