import React from 'react';
import WritePost from './WritePost.jsx';
import { Grid, Row, Col } from 'react-bootstrap';
import $ from 'jquery';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      writePostValue: ''
    };
  }

  writePostHandler() {
    // Create new squeak
    var squeak = {
      userId: 89,
      text: this.writePostValue
    };
    $.ajax({
      url: '/api/writepost',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(squeak),
      success: res => {
        console.log('res');
      },
      error: err => {
        console.error('err');
      }
    });
  }

  onPostInputChangeHandler(e) {
    this.setState({writePostValue: e.target.value});
  }

  render() {
    return (
      <Grid>
        <Col xs={6} md={3} className="show-box">
          <h3>USER INFO / TRENDING</h3>
        </Col>
        <Col xs={6} md={6} className="show-box">
          <div className="home">
            <WritePost
              writePostValue={this.state.writePostValue}
              onPostInputChangeHandler={this.onPostInputChangeHandler.bind(this)}
              writePostHandler={this.writePostHandler.bind(this)}
            />
          </div>
          <h3>FEED</h3>
        </Col>
        <Col xsHidden md={3} className="show-box">
          <h3>WHO TO FOLLOW / BOTTOM NAV</h3>
        </Col>
      </Grid>
    );
  }
}

export default HomePage;
