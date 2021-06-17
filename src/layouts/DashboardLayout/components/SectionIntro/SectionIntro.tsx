import React from 'react'
import {Link} from 'react-router-dom'
import {SectionIntroBase} from './SectionIntro.style'
import {ButtonAdd, ButtonExport} from '../../../../components/atoms'

const SectionIntro = (props: any): JSX.Element => {

    return <SectionIntroBase>
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="#">
                        Dashboard
                    </Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to="#">
                        {props.title}
                    </Link>
                </li>
                <li className="breadcrumb-item active">
                    List
                </li>
            </ol>
        </nav>
        <nav className="navbar navbar-action">
            <ButtonAdd link='#'/>
            <ButtonExport link='#'/>
        </nav>
    </SectionIntroBase>
}

export default SectionIntro