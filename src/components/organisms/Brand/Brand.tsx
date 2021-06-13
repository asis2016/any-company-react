import React, {useEffect, useState} from 'react'
import {axiosInstance} from '../../../helpers';
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
        axiosInstance.get(`${api}/`)
            .then(response => setBrand(response.data))
            .catch(err => console.log('Brand.tsx: ', err))
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