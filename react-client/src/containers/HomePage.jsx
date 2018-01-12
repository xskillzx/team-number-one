import React from 'react';
import WritePost from '../components/WritePost.jsx';
import { Grid, Row, Col } from 'react-bootstrap';
import UserInfo from '../components/UserInfo.jsx';
import axios from 'axios';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      writePostValue: ''
    };
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
    );
  }
}

export default HomePage;
