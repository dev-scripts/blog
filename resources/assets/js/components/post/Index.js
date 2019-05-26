import React, { Component } from 'react';

import {Link, Route} from 'react-router-dom';
import Add from "./Add";
import Listing from "./Listing";
import Edit from "./Edit";

export default class Index extends Component {
    render() {
        return (
            <div>
                <div>
                    <hr />
                    <Link to="/post" className="btn btn-primary">Listing </Link> &nbsp;
                    <Link to="/post/add" className="btn btn-primary">Add </Link>
                    <Route exact path="/post" component={Listing} />
                    <Route exact path="/post/add" component={Add} />
                    <Route exact path="/post/edit/:id" component={Edit} />
                </div>
            </div>
        );
    }
}
