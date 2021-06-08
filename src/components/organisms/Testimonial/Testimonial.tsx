import React from 'react'
import {TestimonialBase} from './Testimonial.style'
import {testimonial} from '../../../api/db.json'
import {Col, Container, Row} from 'react-bootstrap'

const Testimonial = (): JSX.Element => {

    return <TestimonialBase>
        <Container>
            <div className="intro">
                <h2 className="text-center">Testimonials </h2>
                <p className="text-center">Our customers love us! Read what they have to say below. Aliquam sed
                    justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
                </p>
            </div>
            <Row className="people">
                {testimonial.map((item, index) => {
                    return (
                        <Col className="item" key={index}>
                            <div className="box">
                                <p className="description">
                                    {item.comments}
                                </p>
                            </div>
                            <div className="author">
                                <img className="rounded-circle"
                                     src={item.image_url}
                                     alt={'title'}
                                />
                                <h5 className="name">
                                    {item.full_name}
                                </h5>
                                <p className="title">
                                    {item.job_title}
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