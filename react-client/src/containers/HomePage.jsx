import React from 'react';
import WritePost from '../components/WritePost.jsx';
import { Grid, Row, Col } from 'react-bootstrap';
import UserInfo from '../components/UserInfo.jsx';
import axios from 'axios';
import $ from 'jquery';
import Feed from '../components/Feed.jsx';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      writePostValue: '',
      squeaks: []
    };
  }

  componentDidMount(id) {
    // i want all the squeaks created by user and 'following'
    this.getAllSqueaks();
  }

  getAllSqueaks(id) {
    let settings = {
      url: '/api/userinfo/1/squeaks/all',
      method: 'GET',
      contentType: 'application/json'
    }
    $.ajax(settings).done(data => {
      this.setState({squeaks: data});
    });
  }

  writePostHandler() {
    axios.post('/api/writepost', {
      userId: 2, //TODO Fix when props are passed
      text: this.state.writePostValue
    }).then(response => {
      this.getAllSqueaks();
    }).catch(err => {
      console.error(err);
    });
  }

  onPostInputChangeHandler(e) {
    this.setState({writePostValue: e.target.value});
  }

  render() {
    return (
      <Grid>
        <Col sm={4} lg={3} className="">
          <div className="dashboard dashboard-left">
            <UserInfo userinfo={this.props.userinfo}/>
          </div>
        </Col>
        <Col sm={8} lg={6} className="squeakfeed">
          <div className="dashboard dashboard-center">
            <WritePost
              userimage={this.props.userinfo[0].profile_img_url}
              writePostValue={this.state.writePostValue}
              onPostInputChangeHandler={this.onPostInputChangeHandler.bind(this)}
              writePostHandler={this.writePostHandler.bind(this)}
            />
            <Feed squeaks={this.state.squeaks}/>
          </div>
        </Col>
        <Col lg={3} mdHidden smHidden xsHidden className="">
          <div className="dashboard dashboard-right">
            <h3>WHO TO FOLLOW</h3>
            <h3>BOTTOM NAV</h3>
          </div>
        </Col>
      </Grid>
    );
  }
}

export default HomePage;
