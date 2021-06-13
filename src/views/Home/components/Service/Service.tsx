import React, {useEffect, useState} from 'react'
import {ServiceBase} from './Service.style'
import {Container, Row} from "react-bootstrap";
import {FeatureBox, SectionIntro} from '../../../../components/molecules'
import axios from 'axios';

/**
 * The service component.
 *
 * @param api
 * @param limit
 * @param title
 * @param tagline
 * @constructor
 */
const Service = ({
                     api,
                     limit,
                     title,
                     tagline
                 }: LandingPageComponentProps): JSX.Element => {

    const [feature, setFeature] = useState<FeatureProps[]>([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/${api}/`)
            .then(response => setFeature(response.data))
        // eslint-disable-next-line
    }, [])

    return (
        <ServiceBase>
            <Container>
                <SectionIntro title={title} tagline={tagline}/>

                <Row>
                    {feature.slice(0, limit).map(item => {
                        return (
                            <FeatureBox id={item.id}
                                        icon={item.icon}
                                        title={item.title}
                                        description={item.description}
                                        key={item.id}/>
                        );
                    })}
                </Row>
            </Container>
        </ServiceBase>
    );
}

export default Service