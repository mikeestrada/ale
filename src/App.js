import React, {Component} from 'react';
import './App.css';
import {getUsers} from "./service/user-service";
import {connect} from 'react-redux';
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/es/Paper/Paper";
import Grid from "@material-ui/core/es/Grid/Grid";
import UserCardComponent from "./component/user-card/user-card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersArray: [],
    };
  }

  updateUsersArray = () => {
    this.setState({
      status: '',
    });
  };
  editUser = (id) => {
    console.log(id);
  };

  componentDidMount() {
    getUsers()
        .then((response) => {
          this.setState({usersArray: response.data.data});
        })
        .catch((error) => {
          console.log(error);
        });
  }

  render() {
    const users = this.state.usersArray.map((user) => {
      return <UserCardComponent key={user.id} user={user}/>
    });
    return (
        <div>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Super Hero Co.
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <Paper>+ Create New</Paper>
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <Paper>{users}</Paper>
            </Grid>
          </Grid>
        </div>
    );
  }
}

export default connect()(App);
