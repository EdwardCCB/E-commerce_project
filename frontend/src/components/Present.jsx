import React from 'react'
import '../styles/Present.css'

import fondoPresent from '../assets/present-assets/bg-image.svg'

export function Present () {
    return (
        <div>
            <article className='present'>
                <div className='product-info'>
                    <div className='present-product-title'>
                        <p>hero-title</p>
                    </div>
                    <div className='present-product-span'>
                        <span>description</span>
                    </div>
                    <div>
                        <button>
                        <span>Buy</span> 
                        </button>
                    </div>
                </div>
            </article>
        </div>
    )

}