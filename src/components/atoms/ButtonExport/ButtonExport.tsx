import React from 'react'
import {ButtonExportBase} from './ButtonExport.style'
import {FaDownload} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const ButtonExport = (props: any): JSX.Element => {

    return <ButtonExportBase>
        <Link className="btn btn-sm btn-outline-primary"
              to={props.link}>
            <FaDownload/> Export
        </Link>
    </ButtonExportBase>
}

export default ButtonExport