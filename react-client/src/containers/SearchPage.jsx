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
    console.log(this.props.userinfo[0].id);
    axios.get(`/api/${this.props.userinfo[0].id}/search?q=${this.props.search.slice(3)}`)
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

  followHandler(userId) {
    let putObj = {"follower_id": this.props.userinfo[0].id, "followed_id": userId};
    axios.put('/api/follow', putObj)
    .then(response => {
      this._toggleIsFollowed(userId);
    })
    .catch(e => console.error(e));
  }

  unfollowHandler(userId) {
    let putObj = {"follower_id": this.props.userinfo[0].id, "followed_id": userId};
    axios.put('/api/unfollow', putObj)
    .then(response => {
      this._toggleIsFollowed(userId);
    })
    .catch(e => console.error(e));
  }
  
  render() {
    return (
      <Grid>
        <Col xsHidden smHidden md={4} ><UserInfo counts={this.props.counts} userinfo={this.props.userinfo} /></Col>
        <Col xs={12} md={8}>
          <UserList users={this.state.users} followHandler={this.followHandler.bind(this)} unfollowHandler={this.unfollowHandler.bind(this)}/>
        </Col>
      </Grid>
    );
  }
}

export default SearchPage;