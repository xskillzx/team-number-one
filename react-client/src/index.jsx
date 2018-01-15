import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import SearchPage from './containers/SearchPage.jsx';
import HomePage from './containers/HomePage.jsx';
import UserPage from './containers/UserPage.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: [{}],
      inputValue: '',
      count: undefined
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
    this.getSqueaksCount();
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

  getSqueaksCount(id) {
    let settings = {
      url: '/api/userinfo/1/squeaks/count',
      method: 'GET',
      contentType: 'application/json'
    }
    $.ajax(settings).done(data => {
      this.setState({count: data[0]['COUNT (text)']});
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
          <Route exact path="/" render={props => (<HomePage squeakCount={this.state.count} userinfo={this.state.userinfo} />)}/>
          <Route path="/search" render={props => (<SearchPage userinfo={this.state.userinfo} squeakCount={this.state.count} {...props.location}/>)}/>
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