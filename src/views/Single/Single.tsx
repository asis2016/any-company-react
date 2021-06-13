import React, {useEffect, useState} from 'react'
import {SingleBase} from './Single.style'
import {Link, useParams} from 'react-router-dom'
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

    return <SingleBase>
        <Header bg={settings.header.bg}>
            <HeaderOtherPage title={'a'} tagline={'b'}/>
        </Header>
        <Container>
            <Row>
                <Col>
                    <div className="intro">
                        <h1>{data.title}</h1>
                        <p>
                            <span className="by">by</span>
                            <Link to="#">
                                {/* todo: author*/}
                            </Link>
                            <span className="date">
                                {data.modified}
                            </span>
                        </p>
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