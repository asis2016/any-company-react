import React from 'react'
import {ProjectModernBase} from './ProjectModern.style'

const ProjectModern = ({
                           image_url,
                           title,
                           description,
                           link
                       }: ProjectProps): JSX.Element => {

    return <ProjectModernBase md={4} sm={6}>
        <a href="#">
            <img className="img-fluid"
                 src={image_url}/>
        </a>
        <h3 className="name">
            {title}
        </h3>
        <p className="description">
            {description}
        </p>
        <a className="action" href={link}>
            <i className="fa fa-arrow-circle-right"></i>
        </a>
    </ProjectModernBase>
}

export default ProjectModern