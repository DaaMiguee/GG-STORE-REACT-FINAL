import React from 'react'
import "./loadercomponent.css"
import { Ring } from '@uiball/loaders'
const LoaderComponent = () => {

    return (
        <div className='loader-container'>
            <Ring 
            size={40}
            lineWeight={5}
            speed={2} 
            color="black" 
            />
        </div>
    )
}

export default LoaderComponent