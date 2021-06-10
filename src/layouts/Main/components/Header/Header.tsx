import React from 'react'
import {Navigation} from '../../../../components/organisms'
import {HeaderBase} from './Header.style'

/***
 * A header component (layouts > Main > components).
 * @param props
 * @constructor
 */
const Header = (props: any): JSX.Element => {
    return <HeaderBase>
        <Navigation brandName="AM Builderss"
        />
        {props.children}
    </HeaderBase>
}

export default Header