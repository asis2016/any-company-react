import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {ProjectClassicBase} from './ProjectClassic.style'

const ProjectClassic = ({title, description, image_url, link}: ProjectProps): JSX.Element => {

    return <ProjectClassicBase sm={6}>
        <Row>
            <Col md={12} lg={5}>
                <Link to={link}>
                    <img className="img-fluid"
                         src={image_url}
                         alt={title}/>
                </Link>
            </Col>
            <Col>
                <h3>
                    <Link to={link}>
                        {title}
                    </Link>
                </h3>
                <p>
                    {description.slice(0, 150)}{' ...'}
                </p>
            </Col>
        </Row>
    </ProjectClassicBase>
}

export default ProjectClassic