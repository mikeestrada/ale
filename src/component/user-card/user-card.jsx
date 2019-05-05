import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/es/Avatar/Avatar";

class UserCardComponent extends Component {
  constructor(props) {
    super(props);
    this.editToggle = false;
    this.state = {
      user: props.user,
      newName: ''
    };
  }

  // updateUsername = () => {
  //   this.setState(state => ({
  //       ...state, user: { first_name: 'red' }
  //   }));
  // };

  // editUser(id) {
  //   dispatch(editUserAction(id));
  // }

  toggleCancel = () => {
    this.editToggle = !this.editToggle;
  };

  render() {
    return (
        <Card>
          <CardContent>
            <Avatar src={this.state.user.avatar}/>
            <Typography component="p">
              {this.state.user.first_name} {this.state.user.last_name}
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small" id={this.state.user.id} onClick={this.editUser(this.state.user.id)}>Edit</Button>
            <Button size="small">Delete</Button>
          </CardActions>
        </Card>
    );
  }
}

export default UserCardComponent;
