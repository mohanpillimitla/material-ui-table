import React, { Component } from "react";
import { Schema } from "./schema";
import { Data } from "./data";
import UserTable from "./usertable";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class UserData extends Component {
  state = {
    name: "",
    data: [],

    fiscalyear: ""
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  handleClick = () => {
    const data = Data();

    const { name, fiscalyear } = this.state;
    const items = data.filter(
      dataitem =>
        dataitem.company === name.toLowerCase() &&
        dataitem.fiscalyear === fiscalyear
    );
    this.setState({ data: items });
  };

  render() {
    const schema = Schema();

    return (
      <div className="row text-center">
        <div className="col-lg-6">
          <TextField
            hintText="enter your name"
            floatingLabelText="client name"
            defaultValue={this.state.name}
            onChange={this.handleChange("name")}
          />
        </div>
        <div className="col-lg-6">
          <TextField
            hintText="enter your year"
            floatingLabelText="fiscal year"
            defaultValue={this.state.fiscalyear}
            onChange={this.handleChange("fiscalyear")}
          />
        </div>
        <div className="col text-center mt-3 mb-2">
          <RaisedButton
            primary={true}
            style={{ width: 105 }}
            onClick={this.handleClick}
          >
            submit
          </RaisedButton>
        </div>
        <div className="col-lg-12 mt-4">
          <UserTable data={this.state.data} schema={schema} />
        </div>
      </div>
    );
  }
}

export default UserData;
