import React from 'react'
import {CardDashboard} from '../../../../components/organisms'
import {DashboardLayout} from '../../../../layouts/DashboardLayout'
import {GalleryBase} from './Gallery.style'

const Gallery = (): JSX.Element => {
    return <GalleryBase>
        <DashboardLayout title='Gallery'>
            <CardDashboard title='Gallery List'>
                <>a</>
            </CardDashboard>
        </DashboardLayout>
    </GalleryBase>
}

export default Gallery