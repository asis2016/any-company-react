import React, {useEffect, useState} from 'react'
import {SingleBase} from './Single.style'
import {Link, useParams} from 'react-router-dom'
import {Col, Container, Row} from 'react-bootstrap'


const Single = (): JSX.Element => {
    let {id}: any = useParams()

    const [content, setContent] = useState<ProjectProps[]>([])

    return <SingleBase>
        <Container>
            <Row>
                <Col className="offset-lg-1 offset-xl-2">

                    <div className="intro">
                        <h1 className="text-center">
                            {/*todo title*/}
                        </h1>
                        <p className="text-center">
                            <span className="by">by</span>
                            <Link to="#">
                                {/* todo: author*/}
                            </Link>
                            <span className="date">
                                {/* todo: posted date*/}
                            </span>
                        </p>
                        <img className="img-fluid featured-image"
                             src={''}
                             alt={'alt'}
                        />
                    </div>

                    <div className="text">
                        <p>Sed lobortis mi. Suspendisse vel placerat ligula.
                            ac sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget
                            velit pulvinar dictum vel in justo. Vestibulum ante ipsum primis in faucibus orci luctus et
                            ultrices posuere cubilia Curae.</p>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac lacus. <strong>Ut
                            vehicula rhoncus</strong> elementum. Etiam quis tristique lectus. Aliquam in arcu eget
                            velit <em>pulvinar dict</em> vel in justo. Vestibulum ante ipsum primis in faucibus orci
                            luctus et ultrices posuere cubilia Curae.</p>
                        <h2>Aliquam In Arcu </h2>
                        <p>Suspendisse vel placerat ligula. Vivamus ac sem lac. Ut vehicula rhoncus elementum. Etiam
                            quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo. Vestibulum
                            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                        <figure className="figure d-block">
                            <img className="figure-img"
                                 src="assets/img/beach.jpg"
                                 alt={'alt'}/>
                            <figcaption className="figure-caption">Caption</figcaption>
                        </figure>
                        <p>
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
                            Suspendisse vel placerat ligula. Vivamus ac sem lac. Ut vehicula rhoncus elementum. Etiam
                            quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </SingleBase>
}

export default Single