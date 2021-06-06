import React from 'react'
import {SectionIntroBase} from './SectionIntro.style'

const SectionIntro = ({title, description}: SectionIntroProps): JSX.Element => {
    return (
        <SectionIntroBase>
            <h2 className="text-center">
                {title}
            </h2>
            <p className="text-center">
                {description}
            </p>
        </SectionIntroBase>
    )
}

export default SectionIntro
