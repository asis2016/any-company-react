import React, {useEffect, useState} from 'react'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FooterBase} from './Footer.style'
import {site, social_media} from '../../../../api/settings.json'
import axios from 'axios'

/***
 * The footer component.
 * @constructor
 */
const Footer = (): JSX.Element => {

    const [siteSetting, setSiteSetting] = useState<SiteSettingProps[]>([])

    useEffect(() => {
        axios.get('site')
            .then((response) => {
                setSiteSetting(response.data)
            })
        return () => {
            console.log('Footer clean up.')
        }
    }, [])

    console.log(site['site_title'])


    return <FooterBase>
        <Container>
            <div className="row">
                <div className="col-sm-6 col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li><Link to="#">Web design</Link></li>
                        <li><Link to="#">Development</Link></li>
                        <li><Link to="#">Hosting</Link></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                    <h3>About</h3>
                    <ul>
                        <li><Link to="#">Company</Link></li>
                        <li><Link to="#">Team</Link></li>
                        <li><Link to="#">Careers</Link></li>
                    </ul>
                </div>
                <div className="col-md-6 item text">
                    <h3>{site['site_title']}</h3>
                    <h6>{site['site_tagline']}</h6>
                    <p>
                        {site['site_description']}
                    </p>
                </div>
                {social_media['footer_visible'] === "true" ?
                    <div className="col item social">
                        <Link to="#">
                            <i className="icon ion-social-facebook"></i>
                        </Link>
                        <Link to="#">
                            <i className="icon ion-social-twitter"></i>
                        </Link>
                        <Link to="#">
                            <i className="icon ion-social-snapchat"></i>
                        </Link>
                        <Link to="#">
                            <i className="icon ion-social-instagram"></i>
                        </Link>
                    </div> : <div></div>
                }
            </div>
            <p className="copyright">Company Name © 2021</p>
        </Container>
    </FooterBase>
}

export default Footer