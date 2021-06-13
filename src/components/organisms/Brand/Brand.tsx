import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {BrandBase} from './Brand.style'

/**
 * A Brand component represents associated brands with your company.
 * 
 * @param api
 * @param limit
 * @param title
 * @param tagline
 * @constructor
 */
const Brand = ({api, limit, title, tagline}: LandingPageComponentProps): JSX.Element => {

    const [brand, setBrand] = useState<BrandProps[]>([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/${api}/`)
            .then(response => setBrand(response.data))
        // eslint-disable-next-line
    }, [])

    return (
        <BrandBase>
            {brand.slice(0, limit).map(item => {
                return <img src={item.image_url}
                            alt={item.title}
                            title={item.title}
                            key={item.id}/>;
            })}
        </BrandBase>
    );
};

export default Brand