import React, {Fragment, useEffect, useState} from 'react'
import {Container, Row} from 'react-bootstrap'
import {LatestProjectBase} from './LatestProject.style'
import {ProjectModern, SectionIntro} from '../../../../components/molecules'
import axios from 'axios'

const LatestProject = (): JSX.Element => {

    const [project, setProject] = useState<ProjectProps[]>([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/projects', {
            params: {
                _limit: 3
            }
        }).then((response) => {
            setProject(response.data)
        })
        return () => {
            console.log('clean up.')
        }
    }, [])

    return <LatestProjectBase>

        <Container>
            {project.length > 0 ?
                <Fragment>
                    <SectionIntro title="Latest Projects (Modern Houses)"
                                  description="Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibherat, pellentesque ut laoreet vitae."/>

                    <Row>
                        {project.map((item, index) => {
                            return (
                                <ProjectModern key={index}
                                               id={item.id}
                                               title={item.title}
                                               image_url={item.image_url}
                                               description={item.description}
                                               link={'/single/' + item.id}/>
                            )
                        })}
                    </Row>
                </Fragment>
                : <div className="warning">
                    <p>No record found.</p>
                    <p>See the instructions and start adding now.</p>
                </div>}
        </Container>
    </LatestProjectBase>
}

export default LatestProject