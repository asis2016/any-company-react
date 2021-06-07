import React from 'react'
import {Container, Row} from 'react-bootstrap'
import {PopularProjectBase} from './PopularProject.style'
import {project} from '../../../../api/db.json'
import {ProjectClassic, SectionIntro} from '../../../../components/molecules'


const PopularProject = (): JSX.Element => {

    return <PopularProjectBase>
        <Container>
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
        </Container>
    </PopularProjectBase>
}

export default PopularProject