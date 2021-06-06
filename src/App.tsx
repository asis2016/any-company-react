import React from 'react';
import './App.css';
import {AppBase} from "./App.style";
import {Col, Container, Row} from "react-bootstrap";
import './assets/css/bootstrap.min.css'
import './assets/fonts/font-awesome.min.css'
import './assets/fonts/ionicons.min.css'
import {Home} from "./views";
import {Footer} from "./layouts/Main/components";
import {Highlight} from './components/organisms'
import {Feature} from './views/Home/components'

import {brands, featurebox, gallery, latestproject, project, testimonial} from '../src/api/db.json'

const App = (): JSX.Element => {
    return <AppBase>
        <Home/>

        <Footer/>

        {/* article-list */}
        <section className="article-list">
            <Container>
                <div className="intro">
                    <h2 className="text-center">
                        Latest Projects (Modern Houses)
                    </h2>
                    <p className="text-center">
                        Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum
                        nibherat, pellentesque ut laoreet vitae.
                    </p>
                </div>
                <Row className="row articles">
                    {latestproject.map((item, index) => {
                        return (
                            <Col md={4} sm={6} className="item" key={index}>
                                <a href="#">
                                    <img className="img-fluid"
                                         src={item.image_url}/>
                                </a>
                                <h3 className="name">
                                    {item.title}
                                </h3>
                                <p className="description">
                                    {item.description}
                                </p>
                                <a className="action" href="#">
                                    <i className="fa fa-arrow-circle-right"></i>
                                </a>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>

        {/* todo: featured box should be inside home. */}
        <Feature />


        {/* projects-horizontal  */}
        <section className="projects-horizontal">
            <Container>
                <div className="intro">
                    <h2 className="text-center">Projects </h2>
                    <p className="text-center">
                        Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum
                        nibh erat, pellentesque ut laoreet vitae.
                    </p>
                </div>
                <div className="row projects">
                    {project.map((item, index) => {
                        return (
                            <div className="col-sm-6 item" key={index}>
                                <div className="row">
                                    <div className="col-md-12 col-lg-5">
                                        <a href="#">
                                            <img className="img-fluid"
                                                 src={item.image_url}/>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <h3 className="name">
                                            {item.title}
                                        </h3>
                                        <p className="description">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </Container>
        </section>

        {/* highlight-phone */}
        <Highlight/>

        {/* photo-gallery */}
        <section className="photo-gallery">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center">
                        Modern Architecture
                    </h2>
                    <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum
                        nibh erat, pellentesque ut laoreet vitae. </p>
                </div>
                <div className="row photos" data-bss-baguettebox="">
                    {gallery.map((item, index) => {
                        return (
                            <Col lg={3} md={4} sm={6} className="item" key={index}>
                                <a href={item.image_url}>
                                    <img className="img-fluid"
                                         src={item.image_url}/>
                                </a>
                            </Col>
                        )
                    })}
                </div>
            </div>
        </section>

        {/* testimonial-clean */}
        <section className="testimonials-clean">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center">Testimonials </h2>
                    <p className="text-center">Our customers love us! Read what they have to say below. Aliquam sed
                        justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
                    </p>
                </div>
                <div className="row people">
                    {testimonial.map((item, index) => {
                        return (
                            <Col className="item" key={index}>
                                <div className="box">
                                    <p className="description">
                                        {item.comments}
                                    </p>
                                </div>
                                <div className="author">
                                    <img className="rounded-circle"
                                         src={item.image_url}/>
                                    <h5 className="name">
                                        {item.full_name}
                                    </h5>
                                    <p className="title">
                                        {item.job_title}
                                    </p>
                                </div>
                            </Col>
                        )
                    })}
                </div>
            </div>
        </section>

        {/* brands */}
        <div className="brands">
            <a href="#">
                {brands.map((item, index) => {
                    return (
                        <img src={item.image_url} key={index}/>
                    )
                })}
            </a>
        </div>

        {/* contact-clean */}
        <section className="contact-clean">
            <form method="post">
                <h2 className="text-center">Contact us</h2>
                <div className="mb-3">
                    <input className="form-control" type="text" name="name" placeholder="Name"/>
                </div>
                <div className="mb-3">
                    <input className="form-control is-invalid"
                           type="email"
                           name="email"
                           placeholder="Email"/>
                    <small className="form-text text-danger">
                        Please enter a
                        correct email address.
                    </small>
                </div>
                <div className="mb-3">
                        <textarea className="form-control"
                                  name="message"
                                  placeholder="Message"></textarea>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="submit">send</button>
                </div>
            </form>
        </section>

        {/* footer-dark */}
        <footer className="footer-dark">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula
                            rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum
                            vel in justo.</p>
                    </div>
                    <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a
                        href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i
                        className="icon ion-social-snapchat"></i></a><a href="#"><i
                        className="icon ion-social-instagram"></i></a></div>
                </div>
                <p className="copyright">Company Name © 2021</p>
            </div>
        </footer>


    </AppBase>
}

export default App;
