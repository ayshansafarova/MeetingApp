import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {FaMeetup} from 'react-icons/fa';
import { Link } from '@reach/router';

class Navigation extends Component {
    render() {
        let {user} = this.props;
        return(
            <nav className="site-nav family-sans navbar navbar-expand navbar-dark higher" style ={{backgroundColor: '#980cb2'}}> 
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <FaMeetup className="mr-2" />
                    Meetup
                </Link>
                <div className="navbar-nav ml-auto">
                {user && (
                        <Link className="nav-item nav-link" to="/meetings">
                        Meetings
                        </Link>
                )}
                {!user && (
                        <Link className="nav-item nav-link" to="/login">
                        Log in
                        </Link>
                )}
                {!user && (
                        <Link className="nav-item nav-link" to="/register">
                        Register
                        </Link>
                )}
                {user && (
                        <Link className="nav-item nav-link" to="/">
                        Log out
                        </Link>
                )}

                </div>
            </div>
            </nav>
        );
    }
}

export default Navigation;