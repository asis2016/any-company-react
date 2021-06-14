import React, {Fragment} from 'react'
import {Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {DashboardLayout} from '../../layouts/DashboardLayout'
import {DashboardBase} from './Dashboard.style'

const Dashboard = (props: any): JSX.Element => {

    return <DashboardBase>
        <DashboardLayout title={'Dashboards'}>
            <Fragment>
                <QuickStat/>
                <Row>
                    <EarningOverview/>
                    <RevenueSource/>
                </Row>
                <Row>
                    <Project/>
                    <ColorExample/>
                </Row>
            </Fragment>
        </DashboardLayout>
    </DashboardBase>
}

/* quick stat */
function QuickStat() {
    return <Row>
        <Col md={6} xl={3} className="mb-4">
            <div className="card shadow border-start-primary py-2">
                <div className="card-body">
                    <div className="row align-items-center no-gutters">
                        <div className="col me-2">
                            <div className="text-uppercase text-primary fw-bold text-xs mb-1">
                                <span>Earnings (monthly)</span>
                            </div>
                            <div className="text-dark fw-bold h5 mb-0"><span>$40,000</span></div>
                        </div>
                        <div className="col-auto"><i
                            className="fas fa-calendar fa-2x text-gray-300"></i></div>
                    </div>
                </div>
            </div>
        </Col>

        <Col md={6} xl={3} className="mb-4">
            <div className="card shadow border-start-success py-2">
                <div className="card-body">
                    <div className="row align-items-center no-gutters">
                        <div className="col me-2">
                            <div className="text-uppercase text-success fw-bold text-xs mb-1">
                                <span>Earnings (annual)</span>
                            </div>
                            <div className="text-dark fw-bold h5 mb-0"><span>$215,000</span></div>
                        </div>
                        <div className="col-auto"><i
                            className="fas fa-dollar-sign fa-2x text-gray-300"></i></div>
                    </div>
                </div>
            </div>
        </Col>

        <Col md={6} xl={3} className="mb-4">
            <div className="card shadow border-start-info py-2">
                <div className="card-body">
                    <div className="row align-items-center no-gutters">
                        <div className="col me-2">
                            <div className="text-uppercase text-info fw-bold text-xs mb-1">
                                <span>Tasks</span></div>
                            <div className="row g-0 align-items-center">
                                <div className="col-auto">
                                    <div className="text-dark fw-bold h5 mb-0 me-3"><span>50%</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-info"
                                             style={{width: '50%'}}>
                                            <span className="visually-hidden">50%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto"><i
                            className="fas fa-clipboard-list fa-2x text-gray-300"></i></div>
                    </div>
                </div>
            </div>
        </Col>

        <Col md={6} xl={3} className="mb-4">
            <div className="card shadow border-start-warning py-2">
                <div className="card-body">
                    <div className="row align-items-center no-gutters">
                        <div className="col me-2">
                            <div className="text-uppercase text-warning fw-bold text-xs mb-1">
                                <span>Pending Requests</span>
                            </div>
                            <div className="text-dark fw-bold h5 mb-0"><span>18</span></div>
                        </div>
                        <div className="col-auto"><i
                            className="fas fa-comments fa-2x text-gray-300"></i></div>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
}

function EarningOverview() {
    return <div className="col-lg-7 col-xl-8">
        <div className="card shadow mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h6 className="text-primary fw-bold m-0">Earnings Overview</h6>
                <div className="dropdown no-arrow">
                    <button className="btn btn-link btn-sm dropdown-toggle"
                            aria-expanded="false" data-bs-toggle="dropdown" type="button"><i
                        className="fas fa-ellipsis-v text-gray-400"></i></button>
                    <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                        <p className="text-center dropdown-header">dropdown header:</p><Link
                        className="dropdown-item" to="#">&nbsp;Action</Link><Link
                        className="dropdown-item" to="#">&nbsp;Another action</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">&nbsp;Something else here</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="chart-area">
                    <canvas
                        data-bss-chart="{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Earnings&quot;,&quot;fill&quot;:true,&quot;data&quot;:[&quot;0&quot;,&quot;10000&quot;,&quot;5000&quot;,&quot;15000&quot;,&quot;10000&quot;,&quot;20000&quot;,&quot;15000&quot;,&quot;25000&quot;],&quot;backgroundColor&quot;:&quot;rgba(78, 115, 223, 0.05)&quot;,&quot;borderColor&quot;:&quot;rgba(78, 115, 223, 1)&quot;}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false},&quot;title&quot;:{},&quot;scales&quot;:{&quot;xAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;],&quot;drawOnChartArea&quot;:false},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}],&quot;yAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;]},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}]}}}"></canvas>
                </div>
            </div>
        </div>
    </div>
}

function RevenueSource() {
    return <div className="col-lg-5 col-xl-4">
        <div className="card shadow mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h6 className="text-primary fw-bold m-0">Revenue Sources</h6>
                <div className="dropdown no-arrow">
                    <button className="btn btn-link btn-sm dropdown-toggle"
                            aria-expanded="false" data-bs-toggle="dropdown" type="button"><i
                        className="fas fa-ellipsis-v text-gray-400"></i></button>
                    <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                        <p className="text-center dropdown-header">dropdown header:</p><Link
                        className="dropdown-item" to="#">&nbsp;Action</Link><Link
                        className="dropdown-item" to="#">&nbsp;Another action</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">&nbsp;Something else here</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="chart-area">
                    <canvas
                        data-bss-chart="{&quot;type&quot;:&quot;doughnut&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Direct&quot;,&quot;Social&quot;,&quot;Referral&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;&quot;,&quot;backgroundColor&quot;:[&quot;#4e73df&quot;,&quot;#1cc88a&quot;,&quot;#36b9cc&quot;],&quot;borderColor&quot;:[&quot;#ffffff&quot;,&quot;#ffffff&quot;,&quot;#ffffff&quot;],&quot;data&quot;:[&quot;50&quot;,&quot;30&quot;,&quot;15&quot;]}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false},&quot;title&quot;:{}}}"></canvas>
                </div>
                <div className="text-center small mt-4"><span className="me-2"><i
                    className="fas fa-circle text-primary"></i>&nbsp;Direct</span><span
                    className="me-2"><i className="fas fa-circle text-success"></i>&nbsp;Social</span><span
                    className="me-2"><i
                    className="fas fa-circle text-info"></i>&nbsp;Refferal</span></div>
            </div>
        </div>
    </div>
}

function Project() {
    return <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="text-primary fw-bold m-0">Projects</h6>
            </div>
            <div className="card-body">
                <h4 className="small fw-bold">Server migration<span
                    className="float-end">20%</span></h4>
                <div className="progress mb-4">
                    <div className="progress-bar bg-danger"
                         style={{width: '20%'}}><span
                        className="visually-hidden">20%</span>
                    </div>
                </div>
                <h4 className="small fw-bold">Sales tracking<span
                    className="float-end">40%</span></h4>
                <div className="progress mb-4">
                    <div className="progress-bar bg-warning"
                         style={{width: '40%'}}><span
                        className="visually-hidden">40%</span>
                    </div>
                </div>
                <h4 className="small fw-bold">Customer Database<span
                    className="float-end">60%</span></h4>
                <div className="progress mb-4">
                    <div className="progress-bar bg-primary" style={{width: '60%'}}><span
                        className="visually-hidden">60%</span></div>
                </div>
                <h4 className="small fw-bold">Payout Details<span
                    className="float-end">80%</span></h4>
                <div className="progress mb-4">
                    <div className="progress-bar bg-info"
                         style={{width: '80%'}}><span
                        className="visually-hidden">80%</span>
                    </div>
                </div>
                <h4 className="small fw-bold">Account setup<span
                    className="float-end">Complete!</span></h4>
                <div className="progress mb-4">
                    <div className="progress-bar bg-success"
                         style={{width: '100%'}}>
                        <span className="visually-hidden">100%</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="text-primary fw-bold m-0">Todo List</h6>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="row align-items-center no-gutters">
                        <div className="col me-2">
                            <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span
                            className="text-xs">10:30 AM</span>
                        </div>
                        <div className="col-auto">
                            <div className="form-check">
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="formCheck-1"/>
                                <label className="form-check-label"></label>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row align-items-center no-gutters">
                        <div className="col me-2">
                            <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span
                            className="text-xs">11:30 AM</span>
                        </div>
                        <div className="col-auto">
                            <div className="form-check">
                                <input className="form-check-input"
                                       type="checkbox" id="formCheck-2"/>
                                <label
                                    className="form-check-label"></label>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row align-items-center no-gutters">
                        <div className="col me-2">
                            <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span
                            className="text-xs">12:30 AM</span>
                        </div>
                        <div className="col-auto">
                            <div className="form-check">
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="formCheck-3"/>
                                <label className="form-check-label"></label></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
}

function ColorExample() {
    return <div className="col">
        <div className="row">
            <div className="col-lg-6 mb-4">
                <div className="card textwhite bg-primary text-white shadow">
                    <div className="card-body">
                        <p className="m-0">Primary</p>
                        <p className="text-white-50 small m-0">#4e73df</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card textwhite bg-success text-white shadow">
                    <div className="card-body">
                        <p className="m-0">Success</p>
                        <p className="text-white-50 small m-0">#1cc88a</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card textwhite bg-info text-white shadow">
                    <div className="card-body">
                        <p className="m-0">Info</p>
                        <p className="text-white-50 small m-0">#36b9cc</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card textwhite bg-warning text-white shadow">
                    <div className="card-body">
                        <p className="m-0">Warning</p>
                        <p className="text-white-50 small m-0">#f6c23e</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card textwhite bg-danger text-white shadow">
                    <div className="card-body">
                        <p className="m-0">Danger</p>
                        <p className="text-white-50 small m-0">#e74a3b</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card textwhite bg-secondary text-white shadow">
                    <div className="card-body">
                        <p className="m-0">Secondary</p>
                        <p className="text-white-50 small m-0">#858796</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Dashboard