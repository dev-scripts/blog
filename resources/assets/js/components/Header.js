import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Category from './category/Index';
import Post from './post/Index';
import Error404 from './Error404';
export default class Header extends Component {
    render() {
        return (

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category">Category</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/post">Posts</Link>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div className='row'>
                    <div className='col-md-12'>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/about' component={About} />
                            <Route exact path='/category' component={Category} />
                            <Route exact path="/category/add" component={Category} />
                            <Route exact path="/category/edit/:id" component={Category} />

                            <Route exact path='/post' component={Post} />
                            <Route exact path="/post/add" component={Post} />
                            <Route exact path="/post/edit/:id" component={Post} />


                            <Route exact path="/*" component={Error404} />
                        </Switch>
                    </div>
                </div>

            </div>

        );
    }
}