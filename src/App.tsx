import React from 'react';
import './App.css';
import {AppBase} from "./App.style";
import {Col, Container, Row} from "react-bootstrap";
import './assets/css/bootstrap.min.css'
import './assets/fonts/font-awesome.min.css'
import './assets/fonts/ionicons.min.css'

const App = (): JSX.Element => {
    return <AppBase>
        {/* header-blue */}
        <header className="header-blue">
            <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                <Container fluid>
                <a className="navbar-brand" href="#">Company Name</a>
                    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                        <span className="visually-hidden">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a></li>
                            <li className="nav-item dropdown">
                                <a className="dropdown-toggle nav-link"
                                   aria-expanded="false" data-bs-toggle="dropdown"
                                   href="#">Dropdown </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">First Item</a>
                                    <a className="dropdown-item" href="#">Second Item</a>
                                    <a className="dropdown-item" href="#">Third Item</a>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex me-auto navbar-form" target="_self">
                            <div className="d-flex align-items-center">
                                <label className="form-label d-flex mb-0"
                                       htmlFor="search-field">
                                    <i className="fa fa-search"></i>
                                </label>
                                <input className="form-control search-field"
                                       type="search"
                                       id="search-field"
                                       name="search" />
                            </div>
                        </form>
                        <span className="navbar-text">
                            <a className="login" href="#">Log In</a>
                        </span>
                        <a className="btn btn-light action-button" role="button" href="#">Sign Up</a>
                    </div>
                </Container>
            </nav>

            <Container className="hero">
                <Row>
                    <Col lg={6} xl={5} className="offset-xl-1">
                        <h1>The revolution is here.</h1>
                        <p>Mauris egestas tellus non ex condimentum, ac ullamcorper sapien dictum. Nam consequat neque
                            quis sapien viverra convallis. In non tempus lorem.
                        </p>
                        <button className="btn btn-light btn-lg action-button" type="button">
                            Learn More
                        </button>
                    </Col>
                    <Col lg={5} md={5} className="offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                        <div className="phone-mockup">
                            <img className="device" src="https://amaharjan.com/projects/any-company/assets/images/phone.svg" />
                            <div className="screen"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>

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



    </AppBase>
}

export default App;
