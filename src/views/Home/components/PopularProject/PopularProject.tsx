import React, {Fragment, useEffect, useState} from 'react'
import {Container, Row} from 'react-bootstrap'
import {PopularProjectBase} from './PopularProject.style'
import {ProjectClassic, SectionIntro} from '../../../../components/molecules'
import axios from 'axios'
import {NoRecordsFound} from '../../../../components/organisms'

/**
 * Returns popular project component for landing page.
 *
 * @param api
 * @param limit
 * @param title
 * @param tagline
 * @constructor
 */
const PopularProject = ({
                            api,
                            limit,
                            title,
                            tagline
                        }: LandingPageComponentProps): JSX.Element => {

    const [project, setProject] = useState<ProjectProps[]>([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/${api}/`)
            .then(response => setProject(response.data))
        // eslint-disable-next-line
    }, [])

    return <PopularProjectBase>
        <Container>
            {project && project.length > 0 ? (
                    <Fragment>
                        <SectionIntro title={title} tagline={tagline}/>

                        <Row>
                            {project.slice(0, limit).map((item, index) => {
                                return (
                                    <ProjectClassic title={item.title}
                                                    description={item.description}
                                                    image_url={item.image_url}
                                                    link={'#'}
                                                    key={index}/>
                                )
                            })}
                        </Row>
                    </Fragment>
                )
                : <NoRecordsFound/>
            }
        </Container>
    </PopularProjectBase>
}

export default PopularProject