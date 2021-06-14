import React from 'react'
import {Link} from 'react-router-dom'
import {NavigationBase} from './Navigation.style'

const Navigation = (): JSX.Element => {

    const menu = [
        ['/dashboard/', 'Dashboard'],
        ['/dashboard/galleries/', 'Gallery'],
        ['/dashboard/profile/', 'Profile'],
        ['/', 'Back to site'],
    ]

    return <NavigationBase>
        <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div className="container-fluid d-flex flex-column p-0">
                <Link className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" 
                      to="#">
                    <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-laugh-wink"></i></div>
                    <div className="sidebar-brand-text mx-3"><span>
                        Any Company
                    </span></div>
                </Link>
                <hr className="sidebar-divider my-0"/>
                <ul className="navbar-nav text-light" id="accordionSidebar">
                    {menu.map((item, index) => {
                        return <li className="nav-item" key={index}>
                            <Link className="nav-link active" to={item[0]}>
                                <i className="fas fa-tachometer-alt"></i>
                                <span>{item[1]}</span>
                            </Link>
                        </li>
                    })}
                </ul>
                <div className="text-center d-none d-md-inline">
                    <button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button>
                </div>
            </div>
        </nav>
    </NavigationBase>
}

export default Navigation