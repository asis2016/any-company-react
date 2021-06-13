import React from 'react'
import {SectionIntroBase} from './SectionIntro.style'

/***
 * The section introduction component.
 *
 * @param title
 * @param tagline
 * @constructor
 */
const SectionIntro = ({
                          title,
                          tagline
                      }: SectionIntroProps): JSX.Element => {
    return (
        <SectionIntroBase>
            <h2>
                {title}
            </h2>
            <p>
                {tagline}
            </p>
        </SectionIntroBase>
    )
}

export default SectionIntro
