import React from 'react'
import {ContactBase} from './Contact.style'

const Contact = (): JSX.Element => {

    return <ContactBase>
        <form method="post">
            <h2 className="text-center">Contact us</h2>
            <div className="mb-3">
                <input className="form-control" type="text" name="name" placeholder="Name"/>
            </div>
            <div className="mb-3">
                <input className="form-control is-invalid"
                       type="email"
                       name="email"
                       placeholder="Email"/>
                <small className="form-text text-danger">
                    Please enter a
                    correct email address.
                </small>
            </div>
            <div className="mb-3">
                        <textarea className="form-control"
                                  name="message"
                                  placeholder="Message"></textarea>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" type="submit">send</button>
            </div>
        </form>
    </ContactBase>
}

export default Contact