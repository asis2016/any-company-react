import React from 'react'
import {Link} from 'react-router-dom'

import {HeaderBlueBase} from "./HeaderBlue.style";
import {Col, Container, Row} from "react-bootstrap";

const HeaderBlue = (): JSX.Element => {
    return (
        <HeaderBlueBase>
            <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                <Container fluid>
                    <Link to="/" className="navbar-brand">
                        AM Builders
                    </Link>
                    <button data-bs-toggle="collapse"
                            className="navbar-toggler"
                            data-bs-target="#navcol-1">
                        <span className="visually-hidden">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='#' className="nav-link">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#' className="nav-link">
                                    Single
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="dropdown-toggle nav-link"
                                   aria-expanded="false"
                                   data-bs-toggle="dropdown"
                                   href="#">
                                    Dropdown{" "}
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">
                                        First Items
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Second Item
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Third Item
                                    </a>
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
                                       name="search"/>
                            </div>
                        </form>
                        <span className="navbar-text">
                <a className="login" href="#">
                  Log In
                </a>
              </span>
                        <a className="btn btn-light action-button" role="button" href="#">
                            Sign Up
                        </a>
                    </div>
                </Container>
            </nav>
            <Container className="hero">
                <Row>
                    <Col lg={6} xl={5} className="offset-xl-1">
                        <h1>Take a tour of our projects.</h1>
                        <p>
                            Mauris egestas tellus non ex condimentum, ac ullamcorper sapien
                            dictum. Nam consequat neque quis sapien viverra convallis. In
                            non tempus lorem.
                        </p>
                        <button className="btn btn-light btn-lg action-button"
                                type="button">
                            Learn More
                        </button>
                    </Col>
                    <Col lg={5}
                         md={5}
                         className="offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                        <div className="phone-mockup">
                            <img className="device"
                                 src="https://amaharjan.com/projects/any-company/assets/images/phone.svg"/>
                            <div className="screen"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </HeaderBlueBase>
    );
}

export default HeaderBlue