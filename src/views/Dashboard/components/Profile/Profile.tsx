import React, {Fragment} from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import {DashboardLayout} from '../../../../layouts/DashboardLayout'
import {ProfileBase} from './Profile.style'

import {site as siteSetting} from '../../../../api/settings.json'

const Profile = (): JSX.Element => {

    return <ProfileBase>
        <DashboardLayout title='Profile'>
            <Fragment>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <SiteSetting/>
                    </Col>
                </Row>
                <div className="row mb-3">
                    <div className="col-lg-4">
                        <div className="card mb-3">
                            <div className="card-body text-center shadow">
                                <img className="rounded-circle mb-3 mt-4"
                                     src="assets/img/dogs/image2.jpeg" width="160"
                                     height="160"/>
                                <div className="mb-3">
                                    <button className="btn btn-primary btn-sm" type="button">Change Photo</button>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="text-primary fw-bold m-0">Projects</h6>
                            </div>
                            <div className="card-body">
                                <h4 className="small fw-bold">Server migration<span className="float-end">20%</span>
                                </h4>
                                <div className="progress progress-sm mb-3">
                                    <div className="progress-bar bg-danger"
                                         style={{width: '20%'}}>
                                        <span className="visually-hidden">20%</span>
                                    </div>
                                </div>
                                <h4 className="small fw-bold">Sales tracking<span className="float-end">40%</span></h4>
                                <div className="progress progress-sm mb-3">
                                    <div className="progress-bar bg-warning"
                                         style={{width: '40%'}}>
                                        <span className="visually-hidden">40%</span>
                                    </div>
                                </div>
                                <h4 className="small fw-bold">Customer Database<span className="float-end">60%</span>
                                </h4>
                                <div className="progress progress-sm mb-3">
                                    <div className="progress-bar bg-primary"
                                         style={{width: '60%'}}><span className="visually-hidden">60%</span>
                                    </div>
                                </div>
                                <h4 className="small fw-bold">Payout Details<span className="float-end">80%</span>
                                </h4>
                                <div className="progress progress-sm mb-3">
                                    <div className="progress-bar bg-info"

                                         style={{width: '80%'}}><span className="visually-hidden">80%</span>
                                    </div>
                                </div>
                                <h4 className="small fw-bold">Account setup<span className="float-end">Complete!</span>
                                </h4>
                                <div className="progress progress-sm mb-3">
                                    <div className="progress-bar bg-success"
                                         style={{width: '100%'}}><span className="visually-hidden">100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row mb-3 d-none">
                            <div className="col">
                                <div className="card textwhite bg-primary text-white shadow">
                                    <div className="card-body">
                                        <div className="row mb-2">
                                            <div className="col">
                                                <p className="m-0">Peformance</p>
                                                <p className="m-0"><strong>65.2%</strong></p>
                                            </div>
                                            <div className="col-auto"><i className="fas fa-rocket fa-2x"></i></div>
                                        </div>
                                        <p className="text-white-50 small m-0"><i
                                            className="fas fa-arrow-up"></i>&nbsp;5% since
                                            last
                                            month</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card textwhite bg-success text-white shadow">
                                    <div className="card-body">
                                        <div className="row mb-2">
                                            <div className="col">
                                                <p className="m-0">Peformance</p>
                                                <p className="m-0"><strong>65.2%</strong></p>
                                            </div>
                                            <div className="col-auto"><i className="fas fa-rocket fa-2x"></i></div>
                                        </div>
                                        <p className="text-white-50 small m-0"><i
                                            className="fas fa-arrow-up"></i>&nbsp;5% since
                                            last
                                            month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card shadow mb-3">
                                    <div className="card-header py-3">
                                        <p className="text-primary m-0 fw-bold">User Settings</p>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="mb-3">
                                                        <label className="form-label"><strong>Username</strong></label>
                                                        <input className="form-control" type="text" id="username"
                                                               placeholder="user.name"
                                                               name="username"/>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="mb-3"><label className="form-label"><strong>Email
                                                        Address</strong></label>
                                                        <input className="form-control" type="email"
                                                               id="email" placeholder="user@example.com"
                                                               name="email"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="mb-3">
                                                        <label className="form-label"><strong>First
                                                            Name</strong></label>
                                                        <input className="form-control" type="text"
                                                               id="first_name" placeholder="John"
                                                               name="first_name"/></div>
                                                </div>
                                                <div className="col">
                                                    <div className="mb-3">
                                                        <label className="form-label"><strong>Last
                                                            Name</strong></label>
                                                        <input className="form-control" type="text"
                                                               id="last_name" placeholder="Doe"
                                                               name="last_name"/></div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <button className="btn btn-primary btn-sm" type="submit">Save Settings
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card shadow">
                                    <div className="card-header py-3">
                                        <p className="text-primary m-0 fw-bold">Contact Settings</p>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label"
                                                ><strong>Address</strong></label><input
                                                className="form-control" type="text" id="address"
                                                placeholder="Sunset Blvd, 38"
                                                name="address"/>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="mb-3">
                                                        <label className="form-label"
                                                        ><strong>City</strong></label><input
                                                        className="form-control" type="text" id="city"
                                                        placeholder="Los Angeles"
                                                        name="city"/></div>
                                                </div>
                                                <div className="col">
                                                    <div className="mb-3">
                                                        <label className="form-label"><strong>Country</strong></label>
                                                        <input className="form-control" type="text" id="country"
                                                               placeholder="USA"
                                                               name="country"/></div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <button className="btn btn-primary btn-sm"
                                                        type="submit">Save&nbsp;Settings
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card shadow mb-5">
                    <div className="card-header py-3">
                        <p className="text-primary m-0 fw-bold">Forum Settings</p>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            <strong>Signature</strong><br/>
                                        </label>
                                        <textarea className="form-control" id="signature" name="signature"/>
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="formCheck-1"/>
                                            <label className="form-check-label">
                                                <strong>Notify me about new
                                                    replies</strong></label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn btn-primary btn-sm" type="submit">Save Settings</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        </DashboardLayout>
    </ProfileBase>
}

/* site settings */
const SiteSetting = () => {
    console.log(siteSetting)

    const initialSiteSetting = {
        site_title: ''
    }

    return <Card className="shadow mb-3">
        <Card.Header className="py-3">
            <p className="text-primary m-0 fw-bold">Site Settings</p>
        </Card.Header>
        <Card.Body>
            <form>
                <Row>
                    <Col>
                        <div className="mb-3">
                            <label className="form-label">
                                <strong>Site Title</strong>
                            </label>
                            <input className="form-control"
                                   type="text"
                                   id="site_title"
                                   placeholder={siteSetting.site_title}
                                   name="username"/>
                        </div>
                    </Col>
                </Row>
                <Row>

                    <Col>
                        <div className="mb-3"><label className="form-label"><strong>Email
                            Address</strong></label>
                            <input className="form-control" type="email"
                                   id="email" placeholder="user@example.com"
                                   name="email"/>
                        </div>
                    </Col>
                </Row>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label"><strong>First
                                Name</strong></label>
                            <input className="form-control" type="text"
                                   id="first_name" placeholder="John"
                                   name="first_name"/></div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label"><strong>Last
                                Name</strong></label>
                            <input className="form-control" type="text"
                                   id="last_name" placeholder="Doe"
                                   name="last_name"/></div>
                    </div>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary btn-sm" type="submit">
                        Save Settings
                    </button>
                </div>
            </form>
        </Card.Body>
    </Card>
}

export default Profile