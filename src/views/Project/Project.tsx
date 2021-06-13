import React, {useEffect, useState} from 'react'
import {Container, Row} from 'react-bootstrap'
import {ProjectModern} from '../../components/molecules'
import {Header} from '../../layouts/Main/components'
import {ProjectBase} from './Project.style'
import axios from 'axios'
import {HeaderOtherPage} from '../../components/atoms'
import {project as projectSetting} from '../../api/settings.json'

const Project = (): JSX.Element => {

    const [project, setProject] = useState<ProjectProps[]>([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/projects/')
            .then(response => setProject(response.data))
    }, [])

    const setting = {
        header: projectSetting.header
    }

    return <ProjectBase>
        <Header bg={setting.header.bg}>
            <HeaderOtherPage title="From the Projects" tagline=""/>
        </Header>
        <Container className="projects-container">
            <Row>
                {project.map(item => {
                    return <ProjectModern id={item.id}
                                          image_url={item.image_url}
                                          title={item.title}
                                          description={item.description}
                                          link={`/single/${item.id}`}
                                          key={item.id}/>
                })}
            </Row>
        </Container>
    </ProjectBase>
}

export default Project