import React, {Fragment, useEffect, useState} from 'react'
import {Container, Row} from 'react-bootstrap'
import {LatestProjectBase} from './LatestProject.style'
import {ProjectModern, SectionIntro} from '../../../../components/molecules'
import axios from 'axios'
import {NoRecordsFound} from '../../../../components/organisms'


/***
 * The Latest project component inherts projects (for landing page).
 *
 * @param api
 * @param limit
 * @param title
 * @param tagline
 * @constructor
 */
const LatestProject = ({
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

    return <LatestProjectBase>
        <Container>
            {project.length > 0 ?
                <Fragment>
                    <SectionIntro title={title} tagline={tagline}/>

                    <Row>
                        {project.slice(0, limit).map(item => {
                            return (
                                <ProjectModern id={item.id}
                                               title={item.title}
                                               image_url={item.image_url}
                                               description={item.description}
                                               link={'/single/' + item.id}
                                               key={item.id}/>
                            )
                        })}
                    </Row>
                </Fragment>
                : <NoRecordsFound/>
            }
        </Container>
    </LatestProjectBase>
}

export default LatestProject