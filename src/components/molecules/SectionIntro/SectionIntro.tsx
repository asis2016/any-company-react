import React from 'react'
import {SectionIntroBase} from './SectionIntro.style'

const SectionIntro = ({title, tagline}: SectionIntroProps): JSX.Element => {
    return (
        <SectionIntroBase>
            <h2 className="text-center">
                {title}
            </h2>
            <p className="tagline">
                {tagline}
            </p>
        </SectionIntroBase>
    )
}

export default SectionIntro
