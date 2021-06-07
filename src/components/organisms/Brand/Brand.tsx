import React from 'react'
import {BrandBase} from './Brand.style'
import {brands} from '../../../api/db.json'

const Brand = (): JSX.Element => {

    return <BrandBase>
        <a href="#">
            {brands.map((item, index) => {
                return (
                    <img src={item.image_url} key={index}/>
                )
            })}
        </a>
    </BrandBase>
}

export default Brand