import React from 'react'
import {BrandBase} from './Brand.style'
import {brands} from '../../../api/db.json'
import { Link } from 'react-router-dom'

const Brand = (): JSX.Element => {

    return <BrandBase>
        <Link to="#">
            {brands.map((item, index) => {
                return (
                    <img src={item.image_url} key={index} alt={'title'}/>
                )
            })}
        </Link>
    </BrandBase>
}

export default Brand