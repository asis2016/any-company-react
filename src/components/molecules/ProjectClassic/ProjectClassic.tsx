import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {ProjectClassicBase} from './ProjectClassic.style'

const ProjectClassic = ({title, description, image_url, link}: ProjectProps): JSX.Element => {

    return <ProjectClassicBase sm={6}>
        <Row>
            <Col md={12} lg={5}>
                <a href="#">
                    <img className="img-fluid" src={image_url}/>
                </a>
            </Col>
            <Col>
                <h3 className="name">
                    {title}
                </h3>
                <p className="description">
                    {description}
                </p>
            </Col>
        </Row>
    </ProjectClassicBase>
}

export default ProjectClassic