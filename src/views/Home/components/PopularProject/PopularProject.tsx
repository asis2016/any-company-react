import React, {Fragment, useEffect, useState} from 'react'
import {Container, Row} from 'react-bootstrap'
import {PopularProjectBase} from './PopularProject.style'
import {ProjectClassic, SectionIntro} from '../../../../components/molecules'
import axios from 'axios'
import {NoRecordsFound} from '../../../../components/organisms'


const PopularProject = (): JSX.Element => {

    const [project, setProject] = useState<ProjectProps[]>([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/projects/').then((response) => {
            setProject(response.data)
        })
        return () => console.log('PopularProject cleanup.')
    }, [])

    return <PopularProjectBase>
        <Container>
            {project && project.length > 0 ? (
                    <Fragment>
                        <SectionIntro title="Popular Projects"
                                      description="Nunc luctus in metus eget fringilla. Aliquam sed justo ligula Vestibulum."/>

                        <Row>
                            {project.map((item, index) => {
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