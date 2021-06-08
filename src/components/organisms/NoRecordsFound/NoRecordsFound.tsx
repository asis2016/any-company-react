import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {NoRecordsFoundBase} from './NoRecordsFound.style'

const NoRecordsFound = (): JSX.Element => {

    return <NoRecordsFoundBase>
        <Row>
            <Col className="text-center">
                <b>No records found.</b>
            </Col>
        </Row>
    </NoRecordsFoundBase>
}

export default NoRecordsFound