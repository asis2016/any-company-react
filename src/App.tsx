import React from 'react';
import './App.css';
import {AppBase} from "./App.style";
import {Col, Container, Row} from "react-bootstrap";
import './assets/css/bootstrap.min.css'
import './assets/fonts/font-awesome.min.css'
import './assets/fonts/ionicons.min.css'
import {Home} from "./views";
import {Footer} from "./layouts/Main/components";

const App = (): JSX.Element => {
    return <AppBase>


        <Home/>

        <Footer/>

        {/* article-list */}
        <section className="article-list">
            <Container>
                <div className="intro">
                    <h2 className="text-center">Latest Articles</h2>
                    <p className="text-center">
                        Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum
                        nibherat, pellentesque ut laoreet vitae.
                    </p>
                </div>
                <Row className="row articles">
                    <Col md={4} sm={6} className="item">
                        <a href="#">
                            <img className="img-fluid"
                                 src="https://amaharjan.com/projects/any-company/assets/images/desk.jpg"/>
                        </a>
                        <h3 className="name">Article Title</h3>
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                            Praesent
                            aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p><a
                        className="action" href="#"><i className="fa fa-arrow-circle-right"></i></a>
                    </Col>
                    <Col md={4} sm={6} className="item">
                        <a href="#">
                            <img className="img-fluid"
                                 src="https://amaharjan.com/projects/any-company/assets/images/building.jpg"/>
                        </a>
                        <h3 className="name">Article Title</h3>
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                            Praesent
                            aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p><a
                        className="action" href="#"><i className="fa fa-arrow-circle-right"></i></a>
                    </Col>
                    <Col md={4} sm={6} className="item">
                        <a href="#">
                            <img className="img-fluid"
                                 src="https://amaharjan.com/projects/any-company/assets/images/loft.jpg"/>
                        </a>
                        <h3 className="name">Article Title</h3>
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                            Praesent
                            aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p><a
                        className="action" href="#"><i className="fa fa-arrow-circle-right"></i></a>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* featured box */}
        <section className="features-boxed">
            <Container className="container">
                <div className="intro">
                    <h2 className="text-center">Features </h2>
                    <p className="text-center">
                        Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum
                        nibh erat, pellentesque ut laoreet vitae.
                    </p>
                </div>
                <Col className="row justify-content-center features">
                    <Col lg={4} md={5} sm={6} className="item">
                        <div className="box">
                            <i className="fa fa-map-marker icon"></i>
                            <h3 className="name">Works everywhere</h3>
                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                                Praesent aliquam in tellus eu.
                            </p>
                            <a className="learn-more" href="#">Learn more »</a>
                        </div>
                    </Col>
                    <Col lg={4} md={5} sm={6} className="item">
                        <div className="box">
                            <i className="fa fa-clock-o icon"></i>
                            <h3 className="name">Always available</h3>
                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                                Praesent aliquam in tellus eu.</p>
                            <a className="learn-more" href="#">Learn more »</a>
                        </div>
                    </Col>
                    <Col lg={4} md={5} sm={6} className="item">
                        <div className="box">
                            <i className="fa fa-list-alt icon"></i>
                            <h3 className="name">Customizable </h3>
                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                                Praesent aliquam in tellus eu.</p>
                            <a className="learn-more" href="#">Learn more »</a>
                        </div>
                    </Col>
                    <Col lg={4} md={5} sm={6} className="item">
                        <div className="box">
                            <i className="fa fa-leaf icon"></i>
                            <h3 className="name">Organic </h3>
                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                                Praesent aliquam in tellus eu.</p>
                            <a className="learn-more" href="#">Learn more »</a>
                        </div>
                    </Col>
                    <Col lg={4} md={5} sm={6} className="item">
                        <div className="box">
                            <i className="fa fa-plane icon"></i>
                            <h3 className="name">Fast </h3>
                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                                Praesent aliquam in tellus eu.</p>
                            <a className="learn-more" href="#">Learn more »</a>
                        </div>
                    </Col>
                    <Col lg={4} md={5} sm={6} className="item">
                        <div className="box">
                            <i className="fa fa-phone icon"></i>
                            <h3 className="name">Mobile-first</h3>
                            <p className="description">
                                Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                                Praesent aliquam in tellus eu.
                            </p>
                            <a className="learn-more" href="#">Learn more »</a>
                        </div>
                    </Col>
                </Col>
            </Container>
        </section>

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
                    <div className="col-sm-6 item">
                        <div className="row">
                            <div className="col-md-12 col-lg-5">
                                <a href="#">
                                    <img className="img-fluid"
                                         src="https://amaharjan.com/projects/any-company/assets/images/desk.jpg"/>
                                </a>
                            </div>
                            <div className="col">
                                <h3 className="name">Project Name</h3>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                                    lacus. Praesent aliquam in tellus eu gravida.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 item">
                        <div className="row">
                            <div className="col-md-12 col-lg-5">
                                <a href="#">
                                    <img className="img-fluid"
                                         src="https://amaharjan.com/projects/any-company/assets/images/building.jpg"/>
                                </a>
                            </div>
                            <div className="col">
                                <h3 className="name">Project Name</h3>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                                    lacus. Praesent aliquam in tellus eu gravida.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 item">
                        <div className="row">
                            <div className="col-md-12 col-lg-5">
                                <a href="#">
                                    <img className="img-fluid"
                                         src="https://amaharjan.com/projects/any-company/assets/images/loft.jpg"/>
                                </a>
                            </div>
                            <div className="col">
                                <h3 className="name">Project Name</h3>
                                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                                    lacus. Praesent aliquam in tellus eu gravida.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 item">
                        <div className="row">
                            <div className="col-md-12 col-lg-5"><a href="#">
                                <img className="img-fluid"
                                     src="https://amaharjan.com/projects/any-company/assets/images/minibus.jpeg"/>
                            </a>
                            </div>
                            <div className="col">
                                <h3 className="name">Project Name</h3>
                                <p className="description">
                                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                                    lacus. Praesent aliquam in tellus eu gravida.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>

        {/* highlight-phone */}
        <section className="highlight-phone">
            <Container>
                <Row>
                    <Col md={8}>
                        <div className="intro">
                            <h2>Highlight</h2>
                            <p>Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat,
                                pellentesque ut laoreet vitae. Aliqua sed justo ligula.
                            </p>
                            <a className="btn btn-primary" role="button" href="#">Action Button</a>
                        </div>
                    </Col>
                    <Col md={4} sm={4}>
                        <div className="d-none d-md-block phone-mockup">
                            <img className="device"
                                 src="https://amaharjan.com/projects/any-company/assets/images/phone.svg"/>
                            <div className="screen"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* photo-gallery */}
        <section className="photo-gallery">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center">Lightbox Gallery</h2>
                    <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum
                        nibh erat, pellentesque ut laoreet vitae. </p>
                </div>
                <div className="row photos" data-bss-baguettebox="">
                    <div className="col-sm-6 col-md-4 col-lg-3 item"><a
                        href="https://amaharjan.com/projects/any-company/assets/images/desk.jpg"><img
                        className="img-fluid" src="https://amaharjan.com/projects/any-company/assets/images/desk.jpg"/></a>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 item"><a
                        href="https://amaharjan.com/projects/any-company/assets/images/building.jpg"><img
                        className="img-fluid"
                        src="https://amaharjan.com/projects/any-company/assets/images/building.jpg"/></a></div>
                    <div className="col-sm-6 col-md-4 col-lg-3 item"><a
                        href="https://amaharjan.com/projects/any-company/assets/images/loft.jpg"><img
                        className="img-fluid" src="https://amaharjan.com/projects/any-company/assets/images/loft.jpg"/></a>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 item"><a
                        href="https://amaharjan.com/projects/any-company/assets/images/building.jpg"><img
                        className="img-fluid"
                        src="https://amaharjan.com/projects/any-company/assets/images/building.jpg"/></a></div>
                    <div className="col-sm-6 col-md-4 col-lg-3 item"><a
                        href="https://amaharjan.com/projects/any-company/assets/images/loft.jpg"><img
                        className="img-fluid" src="https://amaharjan.com/projects/any-company/assets/images/loft.jpg"/></a>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 item"><a
                        href="https://amaharjan.com/projects/any-company/assets/images/desk.jpg"><img
                        className="img-fluid" src="https://amaharjan.com/projects/any-company/assets/images/desk.jpg"/></a>
                    </div>
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
                    <div className="col-md-6 col-lg-4 item">
                        <div className="box">
                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                                Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                        </div>
                        <div className="author">
                            <img className="rounded-circle"
                                 src="https://amaharjan.com/projects/any-company/assets/images/1.jpg"/>
                            <h5 className="name">Ben Johnson</h5>
                            <p className="title">CEO of Company Inc.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 item">
                        <div className="box">
                            <p className="description">Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                                est, et interdum justo suscipit id.</p>
                        </div>
                        <div className="author">
                            <img className="rounded-circle"
                                 src="https://amaharjan.com/projects/any-company/assets/images/3.jpg"/>
                            <h5 className="name">Carl Kent</h5>
                            <p className="title">Founder of Style Co.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 item">
                        <div className="box">
                            <p className="description">Aliquam varius finibus est, et interdum justo suscipit. Vulputate
                                quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p>
                        </div>
                        <div className="author">
                            <img className="rounded-circle"
                                 src="https://amaharjan.com/projects/any-company/assets/images/2.jpg"/>
                            <h5 className="name">Emily Clark</h5>
                            <p className="title">Owner of Creative Ltd.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* brands */}
        <div className="brands">
            <a href="#">
                <img src="https://amaharjan.com/projects/any-company/assets/images/instacart.png"/>
                <img src="https://amaharjan.com/projects/any-company/assets/images/kickstarter.png"/>
                <img src="https://amaharjan.com/projects/any-company/assets/images/lyft.png"/>
                <img src="https://amaharjan.com/projects/any-company/assets/images/shopify.png"/>
                <img src="https://amaharjan.com/projects/any-company/assets/images/pinterest.png"/>
                <img src="https://amaharjan.com/projects/any-company/assets/images/twitter.png"/>
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
