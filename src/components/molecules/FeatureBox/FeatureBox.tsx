import React from 'react'
import { Link } from 'react-router-dom'
import {FeatureBoxBase} from './FeatureBox.style'

const FeatureBox = ({id, icon, title, description}: FeatureProps): JSX.Element => {
    return (
      <FeatureBoxBase lg={4} md={5} sm={6}>
        <div className="box">
          <i className={`fa ${icon} icon`}></i>
          <h3 className="name">{title}</h3>
          <p className="description">{description}</p>
          <Link to={'/service/'+id}  className="learn-more">
            Learn more »
          </Link>
        </div>
      </FeatureBoxBase>
    );
}

export default FeatureBox