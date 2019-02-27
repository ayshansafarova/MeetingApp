import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css';

class Home extends Component {
    render() {
        let {user} = this.props;
        return(
            <div>
                <div className="container-width">
                    <nav class="navbar navbar-light">
                        <form className="form-inline">
                        {user == null && (
                            <div>
                                <a href="/Login" className="btn m-2 btn-outline-success" type="button">Log in</a>
                                <a href="/Register" className="btn m-2 btn-outline-success" type="button">Register</a>
                            </div>
                        )}
                        {user && (
                            <a href="/Meetings" className="btn m-2 btn-outline-secondary" type="button">Meetings</a>                        
                        )}
                        </form>
                    </nav>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="p-5 text-center">
                               Welcome to React Single Page App
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;