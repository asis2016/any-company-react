import React, {useEffect, useState} from 'react'
import {TestimonialBase} from './Testimonial.style'
import {Col, Container, Row} from 'react-bootstrap'
import axios from 'axios'
import {SectionIntro} from '../../molecules'

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
        axios.get(`http://127.0.0.1:8000/api/v1/${api}/`)
            .then(response => setTestimonials(response.data))
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
                                <p className="description">
                                    {item.testimonial}
                                </p>
                            </div>
                            <div className="author">
                                <img className="rounded-circle"
                                     src={item.image_url}
                                     alt={item.client_name}/>
                                <h5>
                                    {item.client_name}
                                </h5>
                                <p>
                                    {item.client_position}
                                </p>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </TestimonialBase>
}

export default Testimonial