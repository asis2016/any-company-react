import React from 'react' 
import { useParams } from 'react-router'
import {ServiceBase} from './Service.style' 

const Service = (): JSX.Element => { 

const {id}: any = useParams()

    return <ServiceBase> 
    {/* todo */} 
    <h1>Service is here.  </h1> 
    <p>{id}</p>
    </ServiceBase> 
} 

export default Service