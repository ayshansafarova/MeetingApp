import React, {Component} from 'react';
import firebase from '../data-provider/firebase';
import { navigate } from '@reach/router';
import {GoTrashcan} from 'react-icons/go';
import { FaUserPlus, FaUsers } from 'react-icons/fa';
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
                <ul class="list-group">
                <li className="list-group-item d-flex bd-highlight" key={item.meetingID}>
                    <section className="btn-group align-self-center bd-highlight" role="group" aria-label="Meeting Options">
                        <button className="btn btn-sm btn-secondary-outline" 
                        title = "Delete" onClick={e => this.deleteMeeting(e, item.meetingID)} >
                            <GoTrashcan />
                        </button>
                        <button className="btn btn-sm btn-secondary-outline" 
                        title = "Check in" 
                        onClick={() => navigate(`/checkin/${this.props.userID}/${item.meetingID}`)} >
                            <FaUserPlus />
                        </button>
                        <button className="btn btn-sm btn-secondary-outline" 
                        title = "Attendees list" 
                        onClick={() => navigate(`/attendees/${this.props.userID}/${item.meetingID}`)} >
                            <FaUsers />
                        </button>
                    </section>
                    <section className="pl-3 align-self-center text-left bd-highlight">
                        {item.meetingName}
                    </section>
                    <section className="flex-grow-1 bd-highlight align-self-center">
                        <span class="p-2 badge badge-info badge-pill float-right">
                            {item.meetingDate.substr(item.meetingDate.indexOf(" ") + 1)}                    
                        </span>
                    </section>

                    {/* meetingDate should be added */}
                </li>
                </ul>
            )
        });
        return(
            <div>{myMeetings}</div>
        );
    }
}

export default MeetingsList;