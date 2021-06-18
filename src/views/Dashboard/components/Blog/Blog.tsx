import React, {useState, useEffect} from 'react'
import {DashboardLayout} from '../../../../layouts/DashboardLayout'
import {BlogBase} from './Blog.style'
import {Card, Table} from 'react-bootstrap'
import axiosInstance from '../../../../helpers/axios'

const Blog = (): JSX.Element => {
    //const [blog, setBlog] = useState([])

    useEffect(()=>{
        axiosInstance.get('blog')
            .then(response => console.log(response))
    })
    return <BlogBase>
        <DashboardLayout title='Blog'>
            <Card>
                <Card.Header>
                    Blog
                </Card.Header>
                <Card.Body>
                    <Table>
                        <tbody>
                        <tr>
                            <td>a</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </DashboardLayout>
    </BlogBase>
}

export default Blog