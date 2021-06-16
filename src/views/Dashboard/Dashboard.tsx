import React, {Fragment} from 'react'
import {Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {LatestPost, QuickStat} from '../../components/molecules'
import {ModelStat} from '../../components/organisms'
import {DashboardLayout} from '../../layouts/DashboardLayout'
import {DashboardBase} from './Dashboard.style'

const Dashboard = (props: any): JSX.Element => {

    return <DashboardBase>
        <DashboardLayout title={'Dashboards'}>
            <Fragment>
                {/* Quick stat */}
                <Row>
                    <QuickStat title='Monthly Income'
                               content='$ 30,000'/>
                    <QuickStat title='Earnings (Annual)'
                               content='$ 250,000'/>
                    <QuickStat title='Monthly Income'
                               content='$ 30,000'/>
                    <QuickStat title='Monthly Income'
                               content='$ 30,000'/>
                </Row>
                {/* ends quick stat */}

                <Row>
                    <Col>
                        <ModelStat title='Database model stats'/>
                    </Col>
                    <Col>
                        <LatestPost title='Gallery' api='galleries'/>
                        <LatestPost title='Projects' api='projects'/>
                    </Col>
                </Row>
                <Row>
                    <EarningOverview/>
                    <RevenueSource/>
                </Row>
                <Row>

                    <ColorExample/>
                </Row>
            </Fragment>
        </DashboardLayout>
    </DashboardBase>
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