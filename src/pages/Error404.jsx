import React from 'react'
//components
import ButtonComponent from "../components/ButtonComponent/ButtonComponent"
//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
const Error404 = () => {
    return (
        <div className='error-page'>
            <FontAwesomeIcon icon={faCircleExclamation} />
            <p className='error-page-title'>Parece que esta página no existe</p>
            <ButtonComponent to="/" className="error-page-link" label="Ir a la página principal"/>
        </div>
    )
}

export default Error404