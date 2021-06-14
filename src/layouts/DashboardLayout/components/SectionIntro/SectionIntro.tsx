import React from 'react'
import {Link} from 'react-router-dom'
import {SectionIntroBase} from './SectionIntro.style'

const SectionIntro = (props: any): JSX.Element => {

    return <SectionIntroBase>
        <div className="d-sm-flex justify-content-between align-items-center mb-4">
            <h3 className="text-dark mb-0">
                {props.title}
            </h3>
            <Link className="btn btn-primary btn-sm d-none d-sm-inline-block"
                  to="#">
                <i className="fas fa-download fa-sm text-white-50"></i>
                {''}Generate Report
            </Link>
        </div>
    </SectionIntroBase>
}

export default SectionIntro