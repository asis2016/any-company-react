import React from 'react'
import {FeatureBoxBase} from './FeatureBox.style'

const FeatureBox = ({icon, title, description}: FeatureBoxProps): JSX.Element => {
    return <FeatureBoxBase lg={4} md={5} sm={6}>
        <div className="box">
            <i className={`fa ${icon} icon`}></i>
            <h3 className="name">
                {title}
            </h3>
            <p className="description">
                {description}
            </p>
            <a className="learn-more" href="#">
                Learn more »
            </a>
        </div>
    </FeatureBoxBase>
}

export default FeatureBox