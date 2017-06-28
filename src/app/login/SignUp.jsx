import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Route, Switch, Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';

const style = {
  margin: 15,
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleClick() {
    const apiBaseUrl = 'http://localhost:3000/';

    const payload = {
      "username": this.state.username,
      "password": this.state.password,
    };

    axios.post(apiBaseUrl+'signup', payload) // does it work if we get rid of apiBaseUrl and only use the endpoint ex: '/signup'
    .then((response) => {
      if (response.status === 200) {
        // if sign up successful redirect to login page
        <Route path='/login' component={Login}/>
      } else {
          // refresh the SignUp page
        <Route path='/signup' component={SignUp}/>
      }
    })   
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="SignUp"
              iconElementLeft={
                <IconMenu
                  iconButtonElement={<IconButton><MoreVertIcon color="white" /></IconButton>} >
                  <MenuItem primaryText="Map" containerElement={<Link to='/map' />} />
                  <MenuItem primaryText="Timeline" containerElement={<Link to='/timeline' />} />
                  <MenuItem primaryText="Logout" containerElement={<Link to='/logout' />} />
                </IconMenu>
              }

            />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) => this.setState({ username: newValue })}/>
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}/>
            <br />
            <RaisedButton label="Sign up" primary={true} style={style} onClick={event => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default SignUp;