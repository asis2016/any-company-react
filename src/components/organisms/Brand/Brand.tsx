import React from 'react'
import {BrandBase} from './Brand.style'
import {brands} from '../../../api/db.json'

/**
 * A Brand component represents associated brands with your company.
 * */
const Brand = ({
                   id,
                   title,
                   image_url,
                   description,
                   external_link
               }: BrandProps): JSX.Element => {

    return <BrandBase>
        {brands.map((item, index) => {
            return (
                <img src={item.image_url}
                     alt={'title'}
                     key={index}/>
            )
        })}
    </BrandBase>
}

export default Brand