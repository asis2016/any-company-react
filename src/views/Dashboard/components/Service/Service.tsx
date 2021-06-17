import React from 'react'
import {ServiceBase} from './Service.style'
import {DashboardLayout} from '../../../../layouts/DashboardLayout'

const Service = (): JSX.Element => {

    return <ServiceBase>
        <DashboardLayout title='Service'>
            <h1>Services</h1>
        </DashboardLayout>
    </ServiceBase>
}

export default Service