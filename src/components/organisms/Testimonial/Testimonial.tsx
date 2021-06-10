import React, {useEffect, useState} from 'react'
import {TestimonialBase} from './Testimonial.style'
import {Col, Container, Row} from 'react-bootstrap'
import axios from 'axios'
import {SectionIntro} from '../../molecules'

/**
 * A testimonial component.
 * */
const Testimonial = (props: any): JSX.Element => {

    const [testimonials, setTestimonials] = useState<TestimonialProps[]>([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/${props.fetchURL}/`)
            .then((response) => {
                setTestimonials(response.data)
            })
            .catch()
    }, [])

    return <TestimonialBase>
        <Container>
            <SectionIntro title="Testimonials"
                          tagline="Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae."/>

            <Row className="people">
                {testimonials.map(item => {
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
                                     alt={item.client_name}
                                />
                                <h5 className="name">
                                    {item.client_name}
                                </h5>
                                <p className="title">
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