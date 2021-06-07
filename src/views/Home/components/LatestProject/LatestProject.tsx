import React from 'react'
import {Container, Row} from 'react-bootstrap'
import {LatestProjectBase} from './LatestProject.style'
import {latestproject} from '../../../../api/db.json'
import {ProjectModern, SectionIntro} from '../../../../components/molecules'

const LatestProject = (): JSX.Element => {

    return <LatestProjectBase>
        <Container>
            <SectionIntro title="Latest Projects (Modern Houses)"
                          description="Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibherat, pellentesque ut laoreet vitae."/>

            <Row>
                {latestproject.map((item, index) => {
                    return (
                        <ProjectModern key={index}
                                       title={item.title}
                                       image_url={item.image_url}
                                       description={item.description}
                                       link={'#'}/>
                    )
                })}
            </Row>
        </Container>
    </LatestProjectBase>
}

export default LatestProject