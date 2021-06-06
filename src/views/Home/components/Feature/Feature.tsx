import React from 'react'
import {FeatureBase} from './Feature.style'
import {Col, Container, Row} from "react-bootstrap";
import {featurebox} from '../../../../api/db.json'
import {FeatureBox, SectionIntro} from '../../../../components/molecules'

const Feature = (): JSX.Element => {
    return <FeatureBase>
        <Container>
            <SectionIntro title="Our Best Services"
                          description="Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. "/>

            <Row className="row justify-content-center">
                {featurebox.map((item, index) => {
                    return (
                        <Col lg={4} md={5} sm={6} key={index}>
                            <FeatureBox icon={item.icon}
                                        title={item.title}
                                        description={item.description}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </FeatureBase>
}

export default Feature