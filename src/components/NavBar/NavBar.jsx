// import React from 'react'
import React, { useState, useEffect } from 'react';
//css
import "./navbar.css"
//Link Router Dom
import { Link } from 'react-router-dom';
//components
import CartWidget from '../CartWidget/CartWidget';
// bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [navbarStyle, setNavbarStyle] = useState({
        paddingTop: '15px',
        paddingBottom: '15px',
        backgroundColor: '#001428',
    });
    const [navLinkStyle, setNavLinkStyle] = useState({
        color: '#ffffff',
        fontSize: '14px',
    });
    const [brandStyle, setBrandStyle] = useState({
        color: '#ffffff',
        fontSize: '22px',
    });
    const [toggleStyle, setToggleStyle] = useState({
        color: '#ffffff',
    })

    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 0) {
        setNavbarStyle({
            paddingTop: '8px',
            paddingBottom: '8px',
            background: '#fff',
        });
        setNavLinkStyle({
            color: '#000000',
            fontSize: '14px',
        });
        setBrandStyle({
            color: '#000000',
            fontSize: '18px',
        });
        setToggleStyle({
            color: "#000",
        })
        } else {
        setNavbarStyle({
            paddingTop: '15px',
            paddingBottom: '15px',
            background: '#001428',
        });
        setNavLinkStyle({
            color: '#ffffff',
            fontSize: '14px',
        });
        setBrandStyle({
            color: '#ffffff',
            fontSize: '22px',
        });
        setToggleStyle({
            color: "#fff",
        });
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    return (
        <Navbar expand="lg" style={navbarStyle}>
            <Container>
                <Navbar.Brand href="/" style={brandStyle} >GG STORE</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/" style={navLinkStyle} >
                            Inicio
                        </Link>
                        <Link className="nav-link" to="/store" style={navLinkStyle} >
                            Tienda Online
                        </Link>
                        <Link className="nav-link" to="/support" style={navLinkStyle} >
                            Soporte
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                <div className='btn-container'>
                    <CartWidget/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <FontAwesomeIcon className='toggle' style={toggleStyle} icon={faBars}/>
                    </Navbar.Toggle>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar