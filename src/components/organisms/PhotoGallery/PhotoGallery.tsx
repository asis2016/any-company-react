import React, {useEffect, useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {PhotoGalleryBase} from './PhotoGallery.style'
import {SectionIntro} from '../../molecules'
import {Link} from 'react-router-dom'
import {axiosInstance} from '../../../helpers'

/***
 * A photo gallery component for the landing page.
 *
 * @param api
 * @param limit
 * @param title
 * @param tagline
 * @constructor
 */
const PhotoGallery = ({
                          api,
                          limit,
                          title,
                          tagline
                      }: LandingPageComponentProps): JSX.Element => {

    const [gallery, setGallery] = useState<GalleryProps[]>([]);

    useEffect(() => {
        axiosInstance.get(`${api}/`)
            .then(response => setGallery(response.data))
            .catch(err => console.log(err))
        // eslint-disable-next-line
    }, [])

    return <PhotoGalleryBase>
        <Container>
            <SectionIntro title={title} tagline={tagline}/>
            <Row data-bss-baguettebox="">
                {gallery.slice(0, limit).map(item => {
                    return (
                        <Col lg={3} md={4} sm={6} className="item" key={item.id}>
                            <Link to={item.image_url}>
                                <img className="img-fluid"
                                     src={item.image_url}
                                     title={item.title}
                                     alt={item.title}/>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </PhotoGalleryBase>
}

export default PhotoGallery