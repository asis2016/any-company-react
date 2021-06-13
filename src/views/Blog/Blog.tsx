import React, {useEffect, useState} from 'react'
import {BlogBase} from './Blog.style'
import axios from 'axios'
import {HeaderOtherPage} from '../../components/atoms'
import {Container, Row} from 'react-bootstrap'
import {ProjectClassic} from '../../components/molecules'
import {Header} from '../../layouts/Main/components'
import {project as projectSetting} from '../../api/settings.json'


interface BlogProps {
    id: string
    title: string
    url: string
}

const Blog = (): JSX.Element => {

    const [blog, setBlog] = useState<BlogProps[]>([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos/')
            .then(response => setBlog(response.data))
    }, [])

    const setting = {
        header: projectSetting.header
    }


    return <BlogBase>
        <Header bg={setting.header.bg}>
            <HeaderOtherPage title="From the Blog" tagline=""/>
        </Header>
        <Container className="blog-container">
            <Row>
                {blog.slice(0, 100).map(item => {
                    return <ProjectClassic id={item.id}
                                           image_url={item.url}
                                           title={item.title}
                                           description={item.title}
                                           link={`/single/${item.id}`}
                                           key={item.id}/>
                })}
            </Row>
        </Container>
    </BlogBase>
}

export default Blog