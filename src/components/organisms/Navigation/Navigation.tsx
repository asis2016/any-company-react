import React from 'react'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {NavigationBase} from './Navigation.style'

interface NavigationProps {
    brandName?: string
    children?: JSX.Element
}

/***
 * A navigation component.
 * @constructor
 */
const Navigation = ({brandName, children}: NavigationProps): JSX.Element => {

    const menu = [
        ['/', 'Home'],
        ['/blog/', 'Blog'],
        ['/projects/', 'Projects'],
        ['#', 'About us'],
        ['#', 'Contact us'],
    ]

    return <NavigationBase>
        <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
            <Container fluid>
                <Link to="/" className="navbar-brand">
                    {/*{brandName}*/}
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
                        {menu.map((item, index) => {
                            return (
                                <li className="nav-item" key={index}>
                                    <Link to={item[0]} className="nav-link">
                                        {item[1]}
                                    </Link>
                                </li>
                            )
                        })}

                        {/* todo: dropdown
                        <li className="nav-item dropdown">
                            <Link className="dropdown-toggle nav-link"
                                  to="#">
                                Dropdown{" "}
                            </Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#">
                                    First Items
                                </Link>
                                <Link className="dropdown-item" to="#">
                                    Second Item
                                </Link>
                                <Link className="dropdown-item" to="#">
                                    Third Item
                                </Link>
                            </div>
                        </li>*/}
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
                <Link className="login" to='/login/'>
                  Log In
                </Link>
              </span>
                    <Link className="btn btn-light action-button" role="button" to="#">
                        Sign Up
                    </Link>
                </div>
            </Container>
        </nav>
    </NavigationBase>
}

export default Navigation