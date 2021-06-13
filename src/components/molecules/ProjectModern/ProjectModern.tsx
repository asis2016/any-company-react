import React from 'react'
import {ProjectModernBase} from './ProjectModern.style'
import {Link} from 'react-router-dom'

/**
 * The project modern style component.
 *
 * @param id
 * @param image_url
 * @param title
 * @param description
 * @param link
 * @constructor
 */
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

        <h3>
            <Link to={link}>
                {title}
            </Link>
        </h3>
        <p>
            {description.slice(0, 150)}{' ...'}
        </p>
        <Link to={link}
              className="action"
              title="Learn more">
            <i className="fa fa-arrow-circle-right"></i>
        </Link>
    </ProjectModernBase>
}

export default ProjectModern