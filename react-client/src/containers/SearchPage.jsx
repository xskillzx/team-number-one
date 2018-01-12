import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import $ from 'jquery';
import Feed from '../components/Feed.jsx';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    $.get(`/api/search?q=${this.props.search.slice(3)}`, (data) => {
      this.setState({users: data})
    });
  }
  
  render() {
    return (
      <Grid>
        <Col xsHidden smHidden md={4} className="show-box">User Info Comp</Col>
        <Col xs={12} md={8}>
          <Feed users={this.state.users}/>
        </Col>
      </Grid>
    );
  }
}

export default SearchPage;