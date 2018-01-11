import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NavBar from './components/NavBar.jsx';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      squeaks: [{
        username: 'Moisays',
        displayName: 'MoisesM',
        text: 'things are awesome'
      },
      {
        username: 'FelIs',
        displayName: 'Feli Catania',
        text: 'coding is cool I guess'
      }]
    };
  }

  searchHandler() {
    if (this.state.inputValue.length > 0) {
      this.props.history.push(`/search?q=${this.state.inputValue}`);
      this.setState({inputValue: ''});
    }
  }

  onInputChangeHandler(e) {
    this.setState({inputValue: e.target.value});
  }

  render() {
    return (
      <div id="reactapp">
        <Switch>
          <Route exact path="/" render={props => (homePageGrid)}/>
          <Route path="/search" render={props => (<span>Search Results Page for {props.location.search.slice(3) /* getting rid of '?q=' that why I start from three */}</span>)}/>
          <Route path="/login" render={props => (<span>Login Page</span>)}/>
          <Route path="/:username" render={props => (<span>{props.match.params.username}'s Profile Page</span>)}/>
        </Switch>
      </div>
    );
  }
}

App = withRouter(App);

const homePageGrid = (
  <Grid>
    <Row className="show-grid">
      <Col xs={12} className="show-box">
        <h3>NAVBAR</h3>
      </Col>
    </Row>

    <Row className="show-grid">
      <Col xs={6} md={3} className="show-box">
        <h3>USER INFO / TRENDING</h3>
      </Col>
      <Col xs={6} md={6} className="show-box">
        <h3>POST / FEED</h3>
      </Col>
      <Col xsHidden md={3} className="show-box">
        <h3>WHO TO FOLLOW / BOTTOM NAV</h3>
      </Col>
    </Row>
  </Grid>
);


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('app'));

// making something to change
// test