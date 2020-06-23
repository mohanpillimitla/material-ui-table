import React, { Component } from "react";
import "./styles.css";
import UserData from "./userdata";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <MuiThemeProvider>
          <AppBar
            title="Accounting Log"
            position="sticky"
            style={{ textAlign: "center" }}
          />
          <div className="container-fluid">
            <UserData />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default App;
