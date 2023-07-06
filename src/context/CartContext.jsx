import React, {createContext, useState} from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect } from 'react';
export const CartContext = React.createContext()

export const CartProvider = ({children}) => {
  const [state, setState] = useState(0);
  const [count, setCount] = useState(0);

    //estado para el loader
    const [loading, setLoading] = useState(true);
    //estado de productos
    const [productsData, setProductsData] = useState ([]);
    //estado para el carrito
    const [cart, setCart] = useState([]);   
    //estado para filtros
    const [filters, setFilters] = useState({
        brand: "all",
        category: "all",
        minPrice: 0
    })

        //funcion para renderizar productos y cantidad al carrito
    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);
        if (existingProductIndex !== -1) {
          // si esta en el carrito actualiza la cantidad,  quantity
          const updatedCart = cart.map((item, index) =>
            index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
          );
          setCart(updatedCart);
        } else {
          // si no esta en el carrito añade quantity 1
          setCart([...cart, { ...product, quantity: 1 }]);
        }
      };
      //funcion para remover del carrito
      const removeProduct = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
      };
        // funcion para actualizar  cantidad en el carrito
        const updateQuantity = (productId, quantity) => {
          const updatedCart = cart.map((item) => {
            if (item.id === productId) {
              const newQuantity = item.quantity + quantity;
              return { ...item, quantity: newQuantity >= 1 ? newQuantity : 1 };
            }
            return item;
          });
          setCart(updatedCart);
        };
    
    useEffect(() => {
        const db = getFirestore();
        const productCollection = collection(db, "products");
        getDocs(productCollection)
        .then((snapshot) => {
            if (snapshot.docs) {
                setProductsData(
                    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    );
                    setLoading(false);
                }
            })
            .catch((error) => console.log(error))
            .then(() => setLoading(false));
        }, []);
        
    return (
        <CartContext.Provider  value={{count, setCount, productsData, setProductsData, cart, setCart,loading, setLoading, filters, setFilters, addToCart, removeProduct, state, setState, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

// export default CartContext