import React, {useEffect, useState} from 'react'
import {TestimonialBase} from './Testimonial.style'
import {Col, Container, Row} from 'react-bootstrap'
import {SectionIntro} from '../../molecules'
import {axiosInstance} from '../../../helpers'

/***
 * The testimonial component.
 *
 * @param api
 * @param title
 * @param tagline
 * @constructor
 */
const Testimonial = ({api, limit, title, tagline}: LandingPageComponentProps): JSX.Element => {

    const [testimonials, setTestimonials] = useState<TestimonialProps[]>([])

    useEffect(() => {
        axiosInstance.get(`${api}/`)
            .then(response => setTestimonials(response.data))
            .catch(err => console.log('Testimonial.tsx: ', err))
        // eslint-disable-next-line
    }, [])

    return <TestimonialBase>
        <Container>
            <SectionIntro title={title} tagline={tagline}/>
            <Row>
                {testimonials.slice(0, limit).map(item => {
                    return (
                        <Col className="item" key={item.id}>
                            <div className="box">
                                <p>{item.testimonial.slice(0, 100)}{' ...'}</p>
                            </div>
                            <div className="author">
                                <img className="rounded-circle"
                                     src={item.image_url}
                                     alt={item.client_name}/>
                                <h5>{item.client_name}</h5>
                                <p>{item.client_position}</p>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </TestimonialBase>
}

export default Testimonial