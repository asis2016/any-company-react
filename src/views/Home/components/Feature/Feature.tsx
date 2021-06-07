import React from 'react'
import {FeatureBase} from './Feature.style'
import {Container, Row} from "react-bootstrap";
import {featurebox} from '../../../../api/db.json'
import {FeatureBox, SectionIntro} from '../../../../components/molecules'

const Feature = (): JSX.Element => {
    return <FeatureBase>
        <Container>
            <SectionIntro title="Our Best Services"
                          description="Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. "/>

            <Row className="row justify-content-center">
                {featurebox.map((item, index) => {
                    return <FeatureBox key={index}
                                       icon={item.icon}
                                       title={item.title}
                                       description={item.description}/>
                })}
            </Row>
        </Container>
    </FeatureBase>
}

export default Feature