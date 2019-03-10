import React, {Component} from 'react';
import MeetingsList from './MeetingsList';
import DatePicker from "react-datepicker";

import 'bootstrap/dist/css/bootstrap.css';
import "react-datepicker/dist/react-datepicker.css";

class Meetings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meetingName: null,
            startDate: new Date()
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        if(e.target.name !== undefined){
            const itemName = e.target.name;
            const itemValue = e.target.value;
            this.setState({ [itemName]: itemValue});
        }
    }

    handleChangeDate(date) {
        this.setState({
          startDate: date
        });
      }

    handleSubmit(e){
        e.preventDefault();
        this.props.addMeeting(this.state.meetingName, this.state.startDate.toDateString());
        this.setState({
             meetingName: '',
             startDate: new Date()
        });
        // should add date
    }

    render() {
        // let {user} = this.props;
        return(
            <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                <h1 className="font-weight-light">Add a Meeting</h1>
                <div className="card bg-light">
                    <div className="card-body text-center">
                    <form
                        className="formgroup" onSubmit = {this.handleSubmit}>
                        <div className="input-group input-group-lg">
                        <input
                            type="text"
                            className="form-control"
                            name="meetingName"
                            placeholder="Meeting name"
                            aria-describedby="buttonAdd"
                            value = {this.state.meetingName}
                            onChange = {this.handleChange}
                        />
                        <DatePicker
                            name="startDate"
                            selected={this.state.startDate}
                            onChange={this.handleChangeDate}
                            placeholderText="Select a date"
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />
                        <div className="input-group-append">
                            <button
                            type="submit"
                            className="btn btn-sm btn-info"
                            id="buttonAdd"
                            >
                            +
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                <div className="col-md-8 col-11 text-center">
                    <div className="card border-top-0 rounded-0 ">
                            <div className="card-body py-2">
                                <h4 className="card-title m-0 font-weight-light" style={{color: '#980cb2'}}>
                                    Your meetings
                                </h4>
                            </div>
                        {this.props.meetings && (
                            <div className="list-group list-group-flush">
                                <MeetingsList userID = {this.props.userID} meetings = {this.props.meetings} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Meetings;