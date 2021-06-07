import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import {PhotoGalleryBase} from './PhotoGallery.style'
import {gallery} from '../../../api/db.json'

const PhotoGallery = (): JSX.Element => {

    // @ts-ignore
    return <PhotoGalleryBase>
        <Container>
            <div className="intro">
                <h2 className="text-center">
                    Modern Architecture
                </h2>
                <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum
                    nibh erat, pellentesque ut laoreet vitae. </p>
            </div>
            <Row className="photos" data-bss-baguettebox="">
                {gallery.map((item, index) => {
                    return (
                        <Col lg={3} md={4} sm={6} className="item" key={index}>
                            <a href={item.image_url}>
                                <img className="img-fluid"
                                     src={item.image_url}/>
                            </a>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </PhotoGalleryBase>
}

export default PhotoGallery