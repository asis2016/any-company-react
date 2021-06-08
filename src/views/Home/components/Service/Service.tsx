import React, {useEffect, useState} from 'react'
import {ServiceBase} from './Service.style'
import {Container, Row} from "react-bootstrap";
import {FeatureBox, SectionIntro} from '../../../../components/molecules'
import axios from 'axios';

const Service = (): JSX.Element => {

    const [feature, setFeature] = useState<FeatureProps[]>([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/").then((response) => {
            setFeature(response.data);
        });
        return () => {
            console.log('cleanup')
        }
    }, [])

    return (
        <ServiceBase>
            <Container>
                <SectionIntro
                    title="Our Best Services"
                    description="Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. "
                />

                <Row className="justify-content-center">
                    {feature.map((item) => {
                        return (
                            <FeatureBox id={item.id}
                                        key={item.id}
                                        icon={item.icon}
                                        title={item.title}
                                        description={item.description}
                            />
                        );
                    })}
                </Row>
            </Container>
        </ServiceBase>
    );
}

export default Service