import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Error404 extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <div className="alert alert-danger">
                    404 Page Not Found. <Link to="/" className="alert-link">Back to home </Link>
                </div>
            </div>
        );
    }
}
