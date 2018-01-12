import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import SearchPage from './containers/SearchPage.jsx';
import HomePage from './containers/HomePage.jsx';
import UserPage from './containers/UserPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: [{}],
      inputValue: '',
      counts: undefined,
      loggedIn: 0,
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

  componentDidMount() {
    this.getUserInfo();
    this.getCounts();
  }

  getUserInfo(id) {
    let settings = {
      url: '/api/userinfo/1',
      method: 'GET',
      contentType: "application/json",
    }

    $.ajax(settings).done(data => {
      this.setState({userinfo: data});
    });
  }

  getCounts(id) {
    let settings = {
      url: '/api/userinfo/1/counts',
      method: 'GET',
      contentType: 'application/json'
    }
    $.ajax(settings).done(data => {
      this.setState({counts: data});
      console.log(this.state.counts);
    });
  }

  onInputChangeHandler(e) {
    this.setState({inputValue: e.target.value});
  }

  render() {
    return (
      <div id="reactapp">
        <NavBar
          fixedTop="true"
          className="squeaker-nav"
          shouldReplace={this.props.location.pathname === '/'}
          inputValue={this.state.inputValue}
          searchHandler={this.searchHandler.bind(this)}
          onChangeHandler={this.onInputChangeHandler.bind(this)}
          userpic={this.state.userinfo[0].profile_img_url}
        />
        <Switch>
          <Route exact path="/" render={props => (<HomePage counts={this.state.counts} userinfo={this.state.userinfo} />)}/>
          <Route path="/search" render={props => (<SearchPage userinfo={this.state.userinfo} counts={this.state.counts} {...props.location}/>)}/>
          <Route path="/login" render={props => (<span>Login Page</span>)}/>
          <Route path="/:username" render={props => (<UserPage username={props.match.params.username}/>)}/>
        </Switch>
      </div>
    );
  }
}

App = withRouter(App);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('app')
);