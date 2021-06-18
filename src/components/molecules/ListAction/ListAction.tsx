import React from 'react'
import {ListActionBase} from './ListAction.style'
import {FaEdit, FaExternalLinkAlt, FaEye, FaTrashAlt} from "react-icons/fa";
import {Link} from 'react-router-dom'

interface ListActionProps {
    id?:string
    editChoice?:boolean
    updateChoice?: boolean
    viewChoice?: boolean
    viewExternalChoice?: boolean
    deleteChoice?:boolean
}

const ListAction = ({
                        id,
                        viewChoice=true,
                        viewExternalChoice=true
                    }: ListActionProps): JSX.Element => {

    return <ListActionBase>
        {/* view */}
        {viewChoice && <Link to={'/single/' + id}>
            <FaEye/>
        </Link>}

        {/* edit */}
        <Link to='#'>
            <FaEdit/>
        </Link>

        {/* delete */}
        <Link to='#'>
            <FaTrashAlt/>
        </Link>

        {/* view external (on site) */}
        {viewExternalChoice && <Link to='#' title='View on site.'>
            <FaExternalLinkAlt/>
        </Link>}

    </ListActionBase>
}

export default ListAction