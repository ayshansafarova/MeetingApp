import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class MeetingsList extends Component {
    render() {
        const {meetings} = this.props;
        const myMeetings = meetings.map(item => {
            return(
                <div className="list-group-item d-flex" key={item.meetingID}>
                    <section className="pl-3 align-self-center text-left">
                        {item.meetingName}
                    </section>
                </div>
            )
        })
        return(
            <div>{myMeetings}</div>
        );
    }
}

export default MeetingsList;