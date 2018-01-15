import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import UserList from '../components/UserList.jsx';
import UserInfo from '../components/UserInfo.jsx';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get(`/api/search?q=${this.props.search.slice(3)}`)
    .then(response => this.setState({users: response.data}))
    .catch(e => console.error(e));
  }

  _toggleIsFollowed(userId) {
    let dupedUsers = this.state.users.slice();
    let indexFound = null;
    let dupedFoundUser = Object.assign(dupedUsers.find((user, index) => {
      if (user.id === userId) {
        indexFound = index;
        return true;
      }
      return false;
    }));
    dupedFoundUser.is_followed = !dupedFoundUser.is_followed;
    dupedUsers[indexFound] = dupedFoundUser;
    this.setState({users: dupedUsers});
  }

  followHandler(userId) { // TODO: remove hardcode follower_id: 1 once authentication is enabled
    let putObj = {"follower_id": 1, "followed_id": userId};
    axios.put('/api/follow', putObj)
    .then(response => {
      this._toggleIsFollowed(userId);
    })
    .catch(e => console.error(e));
  }

  unfollowHandler(userId) { // TODO: remove hardcode follower_id: 1 once authentication is enabled
    let putObj = {"follower_id": 1, "followed_id": userId};
    axios.put('/api/unfollow', putObj)
    .then(response => {
      this._toggleIsFollowed(userId);
    })
    .catch(e => console.error(e));
  }
  
  render() {
    return (
      <Grid>
        <Col xsHidden smHidden md={4} ><UserInfo squeakCount={this.props.squeakCount} userinfo={this.props.userinfo} /></Col>
        <Col xs={12} md={8}>
          <UserList users={this.state.users} followHandler={this.followHandler.bind(this)} unfollowHandler={this.unfollowHandler.bind(this)}/>
        </Col>
      </Grid>
    );
  }
}

export default SearchPage;