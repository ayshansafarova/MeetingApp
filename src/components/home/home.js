import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css';
import ControlledCarousel from './controlledCarousel';

class Home extends Component {
    render() {
        // let {user} = this.props;
        return(
            <div>
                <div className="container-width">
                    <div className="">
                        <div className="">
                            {/*<div className="p-5 text-center">
                               Welcome to React Single Page App
        </div>*/}
        <ControlledCarousel />
                        </div>
                    </div>
                    {/* <div className="row"> 
                        <div className="col justify-content-center">
                            <form className="form-inline">
                            {user == null && (
                                <div>
                                    <Link to="/login" className="btn m-1 btn-outline-success" type="button">Log in</Link>
                                    <Link to="/register" className="btn m-1 btn-outline-success" type="button">Register</Link>
                                </div>
                            )}
                            {user && (
                                <div>
                                <Link to="/meetings" className="btn m-1 btn-outline-secondary" type="button">Meetings</Link>                        
                                </div>
                            )}
                            </form>
                        </div>
                    </div>*/}
                </div>
            </div>
        );
    }
}

export default Home;