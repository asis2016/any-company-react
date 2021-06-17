import React from 'react'
import {ButtonAddBase} from './ButtonAdd.style'
import {FaPlus} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const ButtonAdd = (props: any): JSX.Element => {

    return <ButtonAddBase>
        <Link className="btn btn-sm btn-outline-primary"
              to={props.link}>
            <FaPlus/> Add new
        </Link>
    </ButtonAddBase>
}

export default ButtonAdd