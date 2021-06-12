import React from 'react'
import {Link} from 'react-router-dom'
import {ButtonMainBase} from './ButtonMain.style'

/**
 * The main button.
 *
 * @params An interface from src/types/ButtonMainProps
 * @returns A JSX.Element
 */
const ButtonMain = ({faIcon, title, link}: ButtonMainProps): JSX.Element => {
    return (
        <ButtonMainBase>
            <Link className='btn btn-primary btn-lg mt-3'
                  to={link}>
                {faIcon && <i className={`pr-3 fas ` + faIcon}></i>}
                {title}
            </Link>
        </ButtonMainBase>
    )
}

export default ButtonMain
