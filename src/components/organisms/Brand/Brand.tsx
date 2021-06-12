import React from 'react'
import {BrandBase} from './Brand.style'

/**
 * A Brand component represents associated brands with your company.
 *
 * @returns A JSX.Element
 * */
const Brand = ({responseData}: BrandProps): JSX.Element => {
    return (
        <BrandBase>
            {responseData.map((item: any, index: number) => {
                return <img src={item['image_url']}
                            alt={item['title']}
                            title={item['title']}
                            key={index}/>;
            })}
        </BrandBase>
    );
};

export default Brand