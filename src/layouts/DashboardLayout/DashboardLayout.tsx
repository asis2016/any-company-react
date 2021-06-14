import React from 'react'
import {DashboardLayoutBase} from './DashboardLayout.style'
import {Link} from 'react-router-dom'
import {Container, Row} from 'react-bootstrap'
import {Footer, Navigation, SectionIntro} from './components'


interface DashboardLayoutProps {
    title: string
    children?: JSX.Element
}

const DashboardLayout = ({
                             title,
                             children
                         }: DashboardLayoutProps): JSX.Element => {

    return <DashboardLayoutBase>
        <div id="wrapper">
            <Navigation/>
            {/* div className="d-flex flex-column" id="content-wrapper" */}
            <div id="content-wrapper">
                <Row id="content">
                    <Top/>
                    <Container fluid>
                        <SectionIntro title={title}/>
                        {children}
                    </Container>
                </Row>
                <Footer/>
            </div>
            <ScrollToTop/>
        </div>
    </DashboardLayoutBase>
}

function Top() {
    return <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
        <Container fluid>
            <button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop"
                    type="button">
                <i className="fas fa-bars"></i>
            </button>
            <form
                className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input className="bg-light form-control border-0 small" type="text"
                           placeholder="Search for ..."/>
                    <button className="btn btn-primary py-0" type="button">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
            <ul className="navbar-nav flex-nowrap ms-auto">
                <li className="nav-item dropdown d-sm-none no-arrow">
                    <Link className="dropdown-toggle nav-link"
                          to="#">
                        <i className="fas fa-search"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in"
                         aria-labelledby="searchDropdown">
                        <form className="me-auto navbar-search w-100">
                            <div className="input-group">
                                <input className="bg-light form-control border-0 small" type="text"
                                       placeholder="Search for ..."/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary py-0" type="button">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                    <div className="nav-item dropdown no-arrow">
                        <Link className="dropdown-toggle nav-link"
                              to="#">
                            <span className="badge bg-danger badge-counter">3+</span>
                            <i className="fas fa-bell fa-fw"></i>
                        </Link>
                        <div
                            className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                            <h6 className="dropdown-header">alerts center</h6>
                            <Link className="dropdown-item d-flex align-items-center" to="#">
                                <div className="me-3">
                                    <div className="bg-primary icon-circle"><i
                                        className="fas fa-file-alt text-white"></i>
                                    </div>
                                </div>
                                <div><span className="small text-gray-500">December 12, 2019</span>
                                    <p>A new monthly report is ready to download!</p>
                                </div>
                            </Link>
                            <Link className="dropdown-item d-flex align-items-center" to="#">
                                <div className="me-3">
                                    <div className="bg-success icon-circle"><i
                                        className="fas fa-donate text-white"></i></div>
                                </div>
                                <div>
                                    <span className="small text-gray-500">December 7, 2019</span>
                                    <p>$290.29 has been deposited into your account!</p>
                                </div>
                            </Link>
                            <Link className="dropdown-item d-flex align-items-center" to="#">
                                <div className="me-3">
                                    <div className="bg-warning icon-circle">
                                        <i className="fas fa-exclamation-triangle text-white"></i>
                                    </div>
                                </div>
                                <div><span className="small text-gray-500">December 2, 2019</span>
                                    <p>
                                        Spending Alert: We've noticed unusually high spending for your
                                        account.
                                    </p>
                                </div>
                            </Link>
                            <Link className="dropdown-item text-center small text-gray-500" to="#">
                                Show All Alerts
                            </Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                    <div className="nav-item dropdown no-arrow">
                        <Link className="dropdown-toggle nav-link"
                              aria-expanded="false"
                              data-bs-toggle="dropdown"
                              to="#">
                            <span className="badge bg-danger badge-counter">7</span>
                            <i className="fas fa-envelope fa-fw"></i>
                        </Link>
                        <div
                            className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                            <h6 className="dropdown-header">alerts center</h6>
                            <Link className="dropdown-item d-flex align-items-center" to="#">
                                <div className="dropdown-list-image me-3">
                                    <img alt='' className="rounded-circle"
                                         src="assets/img/avatars/avatar4.jpeg"/>
                                    <div className="bg-success status-indicator">
                                    </div>
                                </div>
                                <div className="fw-bold">
                                    <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span>
                                    </div>
                                    <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                </div>
                            </Link><Link className="dropdown-item d-flex align-items-center" to="#">
                            <div className="dropdown-list-image me-3">
                                <img alt=''
                                     className="rounded-circle"
                                     src="assets/img/avatars/avatar2.jpeg"/>
                                <div className="status-indicator">

                                </div>
                            </div>
                            <div className="fw-bold">
                                <div className="text-truncate">
                                    <span>I have the photos that you ordered last month!</span>
                                </div>
                                <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                            </div>
                        </Link>
                            <Link className="dropdown-item d-flex align-items-center" to="#">
                                <div className="dropdown-list-image me-3"><img alt=''
                                                                               className="rounded-circle"
                                                                               src="assets/img/avatars/avatar3.jpeg"/>
                                    <div className="bg-warning status-indicator"></div>
                                </div>
                                <div className="fw-bold">
                                    <div className="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span>
                                    </div>
                                    <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                </div>
                            </Link><Link className="dropdown-item d-flex align-items-center" to="#">
                            <div className="dropdown-list-image me-3"><img alt=''
                                                                           className="rounded-circle"
                                                                           src="assets/img/avatars/avatar5.jpeg"/>
                                <div className="bg-success status-indicator"></div>
                            </div>
                            <div className="fw-bold">
                                <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span>
                                </div>
                                <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                            </div>
                        </Link><Link className="dropdown-item text-center small text-gray-500" to="#">Show
                            All Alerts</Link>
                        </div>
                    </div>
                    <div className="shadow dropdown-list dropdown-menu dropdown-menu-end"
                         aria-labelledby="alertsDropdown"></div>
                </li>
                <div className="d-none d-sm-block topbar-divider"></div>
                <li className="nav-item dropdown no-arrow">
                    <div className="nav-item dropdown no-arrow"><Link
                        className="dropdown-toggle nav-link"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                        to="#"><span
                        className="d-none d-lg-inline me-2 text-gray-600 small">Valerie Luna</span><img
                        alt=''
                        className="border rounded-circle img-profile"
                        src="assets/img/avatars/avatar1.jpeg"/></Link>
                        <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in"><Link
                            className="dropdown-item" to="#"><i
                            className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile</Link><Link
                            className="dropdown-item" to="#"><i
                            className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Settings</Link><Link
                            className="dropdown-item" to="#"><i
                            className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Activity
                            log</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="#"><i
                                className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</Link>
                        </div>
                    </div>
                </li>
            </ul>
        </Container>
    </nav>
}

function ScrollToTop() {
    return <Link className="border rounded d-inline scroll-to-top" to={'#'}>
        <i className="fas fa-angle-up"></i>
    </Link>
}

export default DashboardLayout