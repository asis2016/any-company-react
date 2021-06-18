import React from 'react'
import {useParams} from 'react-router-dom'
import {DashboardLayout} from '../../../../layouts/DashboardLayout'
import {Card, Row, Col, Table, Alert} from 'react-bootstrap'
import { FaExclamationTriangle } from "react-icons/fa";



const TestimonialDelete = (): JSX.Element => {
    let {id}: any = useParams()

    return <>
        <DashboardLayout title='Testimonials'>
            <Row>
                <Col md={6}>
                    <Alert variant='warning' className='d-flex align-items-center'>
                        <FaExclamationTriangle/>&nbsp;Are you sure want to delete the following?
                    </Alert>

                    <Card>
                        <Card.Body>
                            <Table>
                                <tbody>
                                <tr>
                                    <td>Id</td>
                                    <td>{id}</td>
                                </tr>
                                <tr>
                                    <td>Client name</td>
                                    <td>YO</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </DashboardLayout>
    </>
}

export default TestimonialDelete