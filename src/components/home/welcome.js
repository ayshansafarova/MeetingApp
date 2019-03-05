import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css';

class Welcome extends Component {
    render() {
        let {user} = this.props;
        return(
            <div className="text-center">
                        <h5 className="text-secondary text-center font-weight-bold m-2">
                            Welcome, {user}
                        </h5>
            </div>
        );
    }
}

export default Welcome;