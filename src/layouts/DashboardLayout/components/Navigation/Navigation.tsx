import React, {useState} from 'react'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {NavigationBase} from './Navigation.style'
import {
    FaBloggerB,
    FaChevronLeft,
    FaChevronRight,
    FaCommentAlt,
    FaHandsHelping,
    FaHome,
    FaPenNib,
    FaPhotoVideo,
    FaProjectDiagram,
    FaReply,
    FaUserCircle,
    FaWrench
} from 'react-icons/fa';


const Navigation = (): JSX.Element => {

    const menu = [
        ['/dashboard/', 'Dashboard', <FaHome/>],
        ['/dashboard/blog/', 'Blog', <FaBloggerB/>],
        ['/dashboard/comments/', 'Comment', <FaCommentAlt/>],
        ['/dashboard/galleries/', 'Gallery', <FaPhotoVideo/>],
        ['/dashboard/projects/', 'Project', <FaProjectDiagram/>],
        ['/dashboard/services/', 'Service', <FaHandsHelping/>],
        ['/dashboard/testimonials/', 'Testimonial', <FaPenNib/>],
        ['/dashboard/settings/', 'General Settings', <FaWrench/>],
        ['/dashboard/profile/', 'Profile', <FaUserCircle/>],
        ['/', 'Back to the site', <FaReply/>],
    ]

    const [isToggle, setIsToggle] = useState(false)

    function toggleHandler() {
        setIsToggle(!isToggle)
    }

    console.log()

    return <NavigationBase>
        <nav className={`navbar sidebar sidebar-dark accordion p-0 ${isToggle ? 'toggled' : ''}`}>

            <Container fluid className="flex-column p-0">
                <Link className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
                      to="#">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i></div>
                    <div className="sidebar-brand-text mx-3"><span>
                        Any Company
                    </span></div>
                </Link>
                <hr className="sidebar-divider my-0"/>
                <ul className="navbar-nav text-light" id="accordionSidebar">
                    {menu.map((item: any, index: any) => {
                        return <li className="nav-item" key={index}>
                            <Link className="nav-link active" to={item[0]}>
                                {item[2]}{' '}
                                <span>{item[1]}</span>
                            </Link>
                        </li>
                    })}
                </ul>
                <div className="text-center d-none d-md-inline">
                    <button className="btn rounded-circle border-0"
                            type="button"
                            onClick={() => toggleHandler()}>
                        {isToggle ? <FaChevronRight/> : <FaChevronLeft/>}
                    </button>
                </div>
            </Container>
        </nav>
    </NavigationBase>
}

export default Navigation