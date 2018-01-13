import React from 'react';
import { Image, Row, Grid, Col, Nav, NavItem } from 'react-bootstrap';
import axios from 'axios';
import Feed from '../components/Feed.jsx';
import UserList from '../components/UserList.jsx';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fullUser: null, selectedKey: null, username: this.props.username};
  }

  componentDidMount() {
    this._getFullUserInfo(this.state.username);
  }

  _getFullUserInfo(username) {
    axios.get(`/api/fulluserinfo/${username}`)
    .then(response => {
      this.setState({fullUser: response.data, selectedKey: 'squeaks', username: username});
    })
    .catch(e => console.error(e));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.username !== this.state.username) {
      this._getFullUserInfo(nextProps.username);
    }
  }

  handleSelect(itemKey) {
    if (this.state.selectedKey !== itemKey) {
      this.setState({selectedKey: itemKey});
    }
  }

  render() {
    let userForFeed = null;
    if (this.state.fullUser) {
      userForFeed = {
        username: this.state.fullUser.username,
        display_name: this.state.fullUser.display_name,
        profile_img_url: this.state.fullUser.profile_img_url
      }
    }
    return (
      <div>
        {!this.state.fullUser && <div>{this.props.username}'s Page NOT FOUND</div>}
        {this.state.fullUser && <Grid>
          <Row>
            <Image className="user-page-banner" src={this.state.fullUser.banner_img_url}/>
          </Row>
          <Row>
            <Col sm={4}>
              <div className="user-page-card">
                <Image className="user-page-image" width={64} height={64} src={this.state.fullUser.profile_img_url} circle/>
                <h6 className="user-page-displayname"><b>{this.state.fullUser.display_name}</b></h6>
                <h6>@{this.state.fullUser.username}</h6>
                <h6>{this.state.fullUser.bio_text}</h6>
              </div>
            </Col>
            <Col sm={8}>
              <Nav activeKey={this.state.selectedKey} bsStyle="tabs" className="user-page-tab-container" onSelect={this.handleSelect.bind(this)}>
                <NavItem selected className="user-page-nav-item" eventKey="squeaks">Squeaks</NavItem>
                <NavItem className="user-page-nav-item" eventKey="following">Following</NavItem>
                <NavItem className="user-page-nav-item" eventKey="followers">Followers</NavItem>
              </Nav>
              {this.state.selectedKey === 'squeaks' && <Feed squeaks={this.state.fullUser.squeaks} user={userForFeed}/>}
              {this.state.selectedKey === 'following' && <UserList users={this.state.fullUser.following}/>}
              {this.state.selectedKey === 'followers' && <UserList users={this.state.fullUser.followers}/>}
            </Col>
          </Row>
        </Grid>}
      </div>
    );
  }
}

export default UserPage;