import React, {Component} from 'react';
import firebase from '../data-provider/firebase';
import { navigate } from '@reach/router';
import {GoTrashcan} from 'react-icons/go';
import { FaLink } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';

class MeetingsList extends Component {
    constructor(props) {
        super(props);
        this.deleteMeeting = this.deleteMeeting.bind(this);
    }
    deleteMeeting = (e, whichMeeting) => {
        e.preventDefault();
        const ref = firebase
        .database().ref(`meetings/${this.props.userID}/${whichMeeting}`);
        ref.remove();
    }

    render() {
        const {meetings} = this.props;
        const myMeetings = meetings.map( item => {
            return(
                <div className="list-group-item d-flex" key={item.meetingID}>
                    <section className="btn-group align-self-center" role="group" aria-label="Meeting Options">
                        <button className="btn btn-sm btn-secondary-outline" 
                        title = "Delete" onClick={e => this.deleteMeeting(e, item.meetingID)} >
                            <GoTrashcan />
                        </button>
                        <button className="btn btn-sm btn-secondary-outline" 
                        title = "Check in" 
                        onClick={() => navigate(`/checkin/${this.props.userID}/${item.meetingID}`)} >
                            <FaLink />
                        </button>
                    </section>
                    <section className="pl-3 align-self-center text-left">
                        {item.meetingName}
                    </section>
                </div>
            )
        });
        return(
            <div>{myMeetings}</div>
        );
    }
}

export default MeetingsList;