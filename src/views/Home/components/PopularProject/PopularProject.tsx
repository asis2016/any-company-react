import React, {Fragment, useEffect, useState} from 'react'
import {Container, Row} from 'react-bootstrap'
import {PopularProjectBase} from './PopularProject.style'
import {ProjectClassic, SectionIntro} from '../../../../components/molecules'
import {NoRecordsFound} from '../../../../components/organisms'
import {axiosInstance} from '../../../../helpers'

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
        axiosInstance.get(`${api}/`)
            .then(response => setProject(response.data))
            .catch(err => console.log('PopularProject.tsx: ', err))
        // eslint-disable-next-line
    }, [])

    return <PopularProjectBase>
        <Container>
            {project && project.length > 0 ? (
                    <Fragment>
                        <SectionIntro title={title} tagline={tagline}/>

                        <Row>
                            {project.slice(0, limit).map(item => {
                                return (
                                    <ProjectClassic title={item.title}
                                                    description={item.description}
                                                    image_url={item.image_url}
                                                    link={`/single/${item.id}`}
                                                    key={item.id}/>
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