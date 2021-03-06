import React, {Component} from 'react';
import { GoTrashcan, GoMail, GoCheck } from 'react-icons/go';
import firebase from '../data-provider/firebase';
import '../home/home.css';

class AttendeesList extends Component {
    // constructor(props) {
    //     super(props);
    // }

    deleteAttendee = (e, whichMeeting, whichAttendee) => {
        e.preventDefault();
        
        const adminUser = this.props.adminUser;
        const ref = firebase
        .database().ref(`meetings/${adminUser}/${whichMeeting}/attendees/${whichAttendee}`);
        ref.remove();
    }

    toggleStar = (e, star, whichMeeting, whichAttendee) => {
        e.preventDefault();
        
        const adminUser = this.props.adminUser;
        const ref = firebase
        .database().ref(`meetings/${adminUser}/${whichMeeting}/attendees/${whichAttendee}/star`);

        if(star === undefined){
            ref.set(true);
        } else{
            ref.set(!star);
        }
    }

    render() {
        const admin = this.props.adminUser === this.props.userID ? true : false;
        const attendees = this.props.attendees;
        const myAttendees = attendees.map( item => {
            return(
                <div className="col-8 col-sm-6 col-md-4 col-lg-3 mb-2 p-0 px-1" key = {item.attendeeID}>
                    <div className="card ">
                        <div className={
                            "card-body px-3 py-2 d-flex align-items-center " + 
                            (admin ? '' : 'justify-content-center')
                        }>

                        {admin && (
                            <div className="btn-group pr-2">
                            {/* adding stars */}
                                <button className={
                                    'btn btn-sm ' +  (item.star ? ' btn-warning' : ' btn-secondary')
                                }
                                title = "Give a star to an attendee"
                                onClick = {e => this.toggleStar(e, item.star, this.props.meetingID, item.attendeeID)}
                                >
                                <GoCheck/>
                                </button>
                                <a className="btn btn-sm btn-secondary" 
                                href={`mailto: ${item.attendeeEmail}`}
                                title="Mail to an attendee">
                                    <GoMail />
                                </a>
                                <button className="btn btn-sm btn-secondary"
                                title = "Delete Attendee"
                                onClick = {e => this.deleteAttendee(e, this.props.meetingID, item.attendeeID)}
                                >
                                <GoTrashcan />
                                </button>
                            </div>
                        )}
                        <div>
                            {item.attendeeName}
                        </div>
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <div className="row justify-content-center">
                {myAttendees}
            </div>
        )
    }
}

export default AttendeesList;