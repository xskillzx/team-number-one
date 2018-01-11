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
    let settings = {
      url: '/api/userinfo/1/squeaks/all',
      method: 'GET',
      contentType: 'application/json'
    }
    $.ajax(settings).done(data => {
      this.setState({squeaks: data}, () => console.log(this.state.squeaks));
    });
  }

  writePostHandler() {
    axios.post('/api/writepost', {
      userId: 2, //TODO Fix when props are passed
      text: this.state.writePostValue
    }).then(response => {
      console.log('You just squeaked!');
    }).catch(err => {
      console.error(err);
    });
  }

<<<<<<< HEAD
  onPostInputChangeHandler(e) {
    this.setState({writePostValue: e.target.value});
  }

  render() {
    return (
      <Grid>
        <Col className="col-md-3 show-box show-grid">
          <Row className="show-box">
            <UserInfo />
          </Row>
          <Row className="show-box">
            <h3>TRENDING</h3>
          </Row>
        </Col>
        <Col className="col-md-6 show-box show-grid">
          <Row className="show-box">
            <div className="home">
              <WritePost
                writePostValue={this.state.writePostValue}
                onPostInputChangeHandler={this.onPostInputChangeHandler.bind(this)}
                writePostHandler={this.writePostHandler.bind(this)}
              />
            </div>
          </Row>
          <Row className="show-box">
            <Feed squeaks={this.state.squeaks}/>
          </Row>
        </Col>
        <Col className="col-md-3 show-box show-grid">
          <Row className="show-box">
            <h3>WHO TO FOLLOW</h3>
          </Row>
          <Row className="show-box">
            <h3>BOTTOM NAV</h3>
          </Row>
        </Col>
      </Grid>
    );
  }
=======
	render() {
		return(
		  <Grid>
		    <Col className="col-md-3 show-box show-grid">
		      <Row className="show-box">
		        <UserInfo />
		      </Row>
		      <Row className="show-box">
		        <h3>TRENDING</h3>
		      </Row>
		    </Col>
		    <Col className="col-md-6 show-box show-grid">
		      <Row className="show-box">
		        <h3>POST</h3>
		      </Row>
		      <Row className="show-box">
		        <h3>FEED</h3>
		      </Row>
		    </Col>
		    <Col className="col-md-3 show-box show-grid">
		      <Row className="show-box">
		        <h3>WHO TO FOLLOW</h3>
		      </Row>
		      <Row className="show-box">
		        <h3>BOTTOM NAV</h3>
		      </Row>
		    </Col>
		  </Grid>
		)
	}
>>>>>>> Added placeholders to userinfo
}

export default HomePage;
