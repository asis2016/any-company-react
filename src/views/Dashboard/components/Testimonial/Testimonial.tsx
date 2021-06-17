import React from 'react'
import {TestimonialBase} from './Testimonial.style'
import {DashboardLayout} from '../../../../layouts/DashboardLayout'

const Testimonial = (): JSX.Element => {

    return <TestimonialBase>
        <DashboardLayout title='Testimonials'>
            <h1>Testimonials</h1>
        </DashboardLayout>
    </TestimonialBase>
}

export default Testimonial