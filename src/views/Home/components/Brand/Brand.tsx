import React, {useEffect, useState} from 'react'
import {Brand as BrandOrganism} from '../../../../components/organisms/'
import axios from 'axios'

/***
 * The Brand component inside Home view.
 *
 * @returns A JSX.Element
 */
const Brand = (): JSX.Element => {

    let [brandResponseData, setBrandResponseData] = useState([]);

    useEffect(() => {
        axios.get("http://0.0.0.0:8000/api/v1/brands/")
            .then(response => setBrandResponseData(response.data));
    }, []);

    return <BrandOrganism responseData={brandResponseData}/>
}

export default Brand