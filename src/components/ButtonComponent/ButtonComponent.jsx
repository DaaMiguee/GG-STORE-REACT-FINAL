import React from 'react'
import "./ButtonComponent.css"
import { Link } from 'react-router-dom'

const ButtonComponent = ({label, className, to}) => {
    return (
        <Link to={to} className={className}>{label}</Link>
    )
}

export default ButtonComponent