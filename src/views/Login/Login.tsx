import React from 'react'
import {Link} from 'react-router-dom'
import {LoginBase} from './Login.style'

/**
 * The login view.
 *
 * @constructor
 */
const Login = (): JSX.Element => {

    return <LoginBase>
        <form>
            <div className="illustration">
                <i className="icon ion-ios-locked-outline"/>
            </div>
            <div className="mb-3">
                <input className="form-control" type="email" name="email" placeholder="hello@amaharjan.com"/>
            </div>
            <div className="mb-3">
                <input className="form-control"
                       type="password"
                       name="password"
                       placeholder="kyomimountaineering"/>
            </div>
            <div className="mb-3">
                <Link to={'/dashboard/'} className="btn btn-primary d-block w-100">
                    Sign In
                </Link>
            </div>
            <p className="forgot">
                Forgot your email or password?
            </p>
            <p className="go-back">
                <Link to={'/'}>
                    Go to Home
                </Link>
            </p>
        </form>
    </LoginBase>
}

export default Login