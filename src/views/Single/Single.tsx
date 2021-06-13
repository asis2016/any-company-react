import React, {useEffect, useState} from 'react'
import {SingleBase} from './Single.style'
import {useParams} from 'react-router-dom'
import {Col, Container, Row} from 'react-bootstrap'
import axios from 'axios'
import {Header} from '../../layouts/Main/components'
import {blog as blogSetting} from '../../api/settings.json'
import {HeaderOtherPage} from '../../components/atoms'

interface DataProps {
    id: string
    title: string
    image_url: string
    content: any
    created: string
    modified: string
}

/**
 * A single view.
 *
 * @constructor
 */
const Single = (): JSX.Element => {
    let {id}: any = useParams()

    const initialData: DataProps = {
        id: '',
        title: '',
        image_url: '',
        content: '',
        created: '',
        modified: ''
    }

    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/projects/${id}`)
            .then(response => {
                setData(response.data)
            })
        // eslint-disable-next-line
    }, [])

    const settings = {
        header: blogSetting.header
    }

    let tagline = `Posted by: x | Posted on: ${data.modified}`

    return <SingleBase>
        <Header bg={settings.header.bg}>
            <HeaderOtherPage title={data.title}
                             tagline={tagline}/>
        </Header>
        <Container className="single-container">
            <Row>
                <Col md={{span: 8, offset: 2}}>
                    <div className="intro">
                        <img className="img-fluid"
                             src={data.image_url}
                             alt={'alt'}/>
                    </div>
                    <div className="content" dangerouslySetInnerHTML={{__html: data.content}}/>
                </Col>
            </Row>
        </Container>
    </SingleBase>
}

export default Single