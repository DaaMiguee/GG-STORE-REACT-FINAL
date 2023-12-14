import React from 'react'
//components
import ButtonComponent from "../components/ButtonComponent/ButtonComponent"
//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
const Error404 = () => {
    return (
        <div className='error_page'>
            <FontAwesomeIcon icon={faCircleExclamation} />
            <p className='error_page_title'>Parece que esta página no existe</p>
            <ButtonComponent to="/" className="error_page_link" label="Ir a la página principal"/>
        </div>
    )
}

export default Error404