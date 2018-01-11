import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import $ from 'jquery';
import Feed from '../components/Feed.jsx';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [ // TODO: remove this sample users once the server creates a search query
        {id: 1, username: 'fefecaca', display_name: 'Feli#1'},
        {id: 2, username: 'henhen', display_name: 'Chesnaughty'}
      ]
    };
  }

  componentDidMount() {
    $.get(`/api/search?q=${this.props.search.slice(3)}`, (data) => {
      // TODO: render data received by setting state with new users
      console.log(data);
    });
  }
  
  render() {
    return (
      <Grid>
        <Col xsHidden smHidden md={4} className="show-box">User Info Comp</Col>
        <Col xs={12} md={8} className="show-box">
          <Feed users={this.state.users}/>
        </Col>
      </Grid>
    );
  }
}

export default SearchPage;