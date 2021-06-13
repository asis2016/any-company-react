import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {HeaderLandingPageBase} from './HeaderLandingPage.style'
import {landingpage} from '../../../../api/db.json'

/***
 * The Header for the landing page.
 * @constructor
 */
const HeaderLandingPage = (): JSX.Element => {
    const header = landingpage['header']
    return <HeaderLandingPageBase>
        <Row>
            <Col xl={{span: 5, offset: 1}} lg={6}>
                <h1>
                    {header['title']}
                </h1>
                <p>
                    {header['tagline']}
                </p>
                <Link to={header.link}
                      className="btn btn-light btn-lg action-button">
                    {header['link_text']}
                </Link>
            </Col>
            <Col xl={{offset: 0}}
                 lg={{span: 5, offset: 1}}
                 md={5}
                 className=" d-none d-lg-block phone-holder">
                {/* todo: should be static image rather than absolute / relative image. */}
                <div className="phone-mockup">
                    <img alt={'title'}
                         className="device"
                         src="https://amaharjan.com/projects/any-company/assets/images/phone.svg"/>
                    <div className="screen"></div>
                </div>
            </Col>
        </Row>
    </HeaderLandingPageBase>
}

export default HeaderLandingPage