import React from 'react'
import {Link} from 'react-router-dom'
import {FeatureBoxBase} from './FeatureBox.style'

const FeatureBox = ({id, icon, title, description}: FeatureProps): JSX.Element => {
    return (
        <FeatureBoxBase lg={4} md={5} sm={6}>
            <div className="box">
                <i className={`fa ${icon}`}></i>
                <h3>{title}</h3>
                <p>
                    {description.slice(0, 95)}{' ...'}
                </p>
                <Link to={'/service/' + id}
                      className="learn-more">
                    Learn more »
                </Link>
            </div>
        </FeatureBoxBase>
    );
}

export default FeatureBox