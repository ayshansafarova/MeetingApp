import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css';

class Welcome extends Component {
    render() {
        let {user} = this.props;
        return(
            <div className="text-center">
                        <span className="text-secondary text-center font-weight-bold">
                            Welcome, {user}
                        </span>
            </div>
        );
    }
}

export default Welcome;