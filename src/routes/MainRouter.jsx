import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// pages
import Home from '../pages/Home';
import Store from "../pages/Store";
import Item from "../pages/Item"
import Error404 from '../pages/Error404';
import { Checkout } from '../pages/Checkout';
//components
import NavBar from '../components/NavBar/NavBar';
import CartContainer from '../components/CartContainer/CartContainer';
const MainRouter = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/store' element={<Store/>}/>
                <Route path='/item/:itemId' element={<Item/>}/>
                <Route path='/cart' element={<CartContainer/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </Router>
    )
}

export default MainRouter