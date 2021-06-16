import {faCalendar} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import {QuickStatBase} from './QuickStat.style'

interface QuickStatProps {
    title?: string
    content?: string
    icon?: any
}

/**
 * QuickStat (Col)
 *
 * @param title
 * @param content
 * @param icon
 * @constructor
 */
const QuickStat = ({
                       title,
                       content,
                       icon
                   }: QuickStatProps): JSX.Element => {

    return (
        <QuickStatBase md={4} xl={3} className="mb-4">
            <Card className="shadow border-start-primary py-2">
                <Card.Body>
                    <Row className="align-items-center no-gutters">
                        <Col className="me-2">
                            <div className="text-uppercase text-primary fw-bold text-xs mb-1">
                                <span>
                                    {title}
                                </span>
                            </div>
                            <div className="text-dark fw-bold h5 mb-0">
                                <span>
                                    {content}
                                </span>
                            </div>
                        </Col>
                        <div className="col-auto">
                            <FontAwesomeIcon icon={faCalendar}/>
                        </div>
                    </Row>
                </Card.Body>
            </Card>
        </QuickStatBase>
    )
}

export default QuickStat