import React from 'react'
import {ProjectBase} from './Project.style'
import {DashboardLayout} from '../../../../layouts/DashboardLayout'

const Project = (): JSX.Element => {

    return <ProjectBase>
        <DashboardLayout title='Projects'>
            <h1>Projects</h1>
        </DashboardLayout>
    </ProjectBase>
}

export default Project