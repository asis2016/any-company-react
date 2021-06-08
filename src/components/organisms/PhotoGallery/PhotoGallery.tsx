import React, {useEffect, useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {PhotoGalleryBase} from './PhotoGallery.style'
import {SectionIntro} from '../../molecules'
import axios from 'axios'
import {Link} from 'react-router-dom'


const PhotoGallery = ({
                          title,
                          description,
                          fetchURL
                      }: PhotoGalleryProps): JSX.Element => {

    const [galleryData, setGalleryData] = useState<GalleryProps[]>([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/' + fetchURL).then((response) => {
            setGalleryData(response.data)
        })
        return () => {
            console.log('Photo gallery cleanup.')
        }
    }, [])

    return <PhotoGalleryBase>
        <Container>
            <SectionIntro title={title}
                          description={description}/>

            <Row className="photos" data-bss-baguettebox="">
                {galleryData.map((item) => {
                    return (
                        <Col lg={3} md={4} sm={6} className="item" key={item.id}>
                            <Link to={item.image_url}>
                                <img className="img-fluid"
                                     src={item.image_url}
                                     title={item.title}
                                     alt={item.title}
                                />
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </PhotoGalleryBase>
}

export default PhotoGallery