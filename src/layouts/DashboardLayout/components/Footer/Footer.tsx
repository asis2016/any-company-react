import React from 'react'
import {Container} from 'react-bootstrap'
import {FooterBase} from './Footer.style'

const Footer = (): JSX.Element => {

    return <FooterBase className="bg-white sticky-footer">
        <Container className="my-auto">
            <div className="text-center my-auto copyright">
                <span>Copyright © Any Company 2021</span>
            </div>
        </Container>
    </FooterBase>
}

export default Footer