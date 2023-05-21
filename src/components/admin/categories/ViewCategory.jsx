import React, { Component } from "react";
// import CategoryService from "../services/CategoryService";

class ViewCategory extends Component {
  constructor(props) {
    super(props);
    console.log('run');

    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Employee Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Employee First Name: </label>
              <div> {this.state.employee.firstName}</div>
            </div>
            <div className="row">
              <label> Employee Last Name: </label>
              <div> {this.state.employee.lastName}</div>
            </div>
            <div className="row">
              <label> Employee Email ID: </label>
              <div> {this.state.employee.emailId}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewCategory;
