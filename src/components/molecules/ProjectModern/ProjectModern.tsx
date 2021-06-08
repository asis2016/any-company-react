import React from 'react'
import {ProjectModernBase} from './ProjectModern.style'
import {Link} from 'react-router-dom'

const ProjectModern = ({
                           id,
                           image_url,
                           title,
                           description,
                           link
                       }: ProjectProps): JSX.Element => {

    return <ProjectModernBase md={4} sm={6}>
        <Link to={link}>
            <img className="img-fluid"
                 src={image_url}
                 alt={title}/>
        </Link>
        <h3 className="name">
            {title}
        </h3>
        <p className="description">
            {description}
        </p>
        <Link to={link} className="action">
            <i className="fa fa-arrow-circle-right"></i>
        </Link>
    </ProjectModernBase>
}

export default ProjectModern