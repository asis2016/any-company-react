import React from 'react'
import {HeaderOtherPageBase} from './HeaderOtherPage.style'

interface HeaderOtherPageProps {
    title: string
    tagline: string
}

const HeaderOtherPage = ({title, tagline}: HeaderOtherPageProps): JSX.Element => {

    return <HeaderOtherPageBase>
        <div>
            <h1>{title}</h1>
            <p>
                {tagline}
            </p>
        </div>
    </HeaderOtherPageBase>
}

export default HeaderOtherPage