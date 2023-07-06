import React, { useEffect, useState } from 'react'
//hook
import { useParams } from 'react-router-dom';
//firebase
import {doc, getDoc, getFirestore } from "firebase/firestore";
//components
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';
import FooterComponent from '../components/FooterComponent/FooterComponent';
const Item = () => {
    const [productData, setProductData] = useState([])
    const { itemId } = useParams();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    useEffect(()=> {
        const db = getFirestore();
        const productCollection = doc(db, "products", itemId)
        getDoc(productCollection).then((snapshot) =>{
            setProductData([{id: snapshot.id, ...snapshot.data()}]);
            setLoading(false);
        })
        .catch((error) => setError(true))
        .then(() => setLoading(false))
    }, [itemId])
    return <div>
        {loading ? <LoaderComponent/> : (
            <div>
                <ItemDetailContainer  productsData={productData}/>
                <FooterComponent/>
            </div>
        )}
    </div>
}

export default Item