import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import SearchPage from './containers/SearchPage.jsx';
import HomePage from './containers/HomePage.jsx';
import UserPage from './containers/UserPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import $ from 'jquery';
import axios from 'axios';

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
  }

  getCounts(id = 1) {
    let settings = {
      url: `/api/userinfo/${id}/counts`,
      method: 'GET',
      contentType: 'application/json'
    }
    $.ajax(settings).done(data => {
      this.setState({counts: data});
    });
  }

  onInputChangeHandler(e) {
    this.setState({inputValue: e.target.value});
  }

  
  signIn(username, password) {
    //if successful
    let signInInfo = {
      "username": username,
      "password": password
    };
    axios.post('/api/sign-in', signInInfo)
      .then(response => {
        if (response.status === 200) {
          this.getCounts(response.data.id);
          this.setState({loggedIn: 1, userinfo: [response.data]}, () => {
            this.props.history.push('/');
          });
        }
        if (response.status === 401) {
          window.alert('Login failed');
        }
      })
      .catch(e => console.error(e));
  }

  signUp(username, password) {
    let signUpInfo = {
      "username": username,
      "password": password
    };
    axios.post('/api/sign-up', signUpInfo)
      .then(response => {
        console.log(response);
        if (response.status === 201) {
          window.alert('Sign up successful');
        }
        if (response.status === 400) {
          window.alert('Username is taken');
        }
      })
      .catch(e => console.error(e));
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
          {/* <Route exact path="/" render={props => (<HomePage userinfo={this.state.userinfo} />)}/> */}
          <Route exact path="/" render={props => (
            this.state.loggedIn ? (
              <HomePage userinfo={this.state.userinfo} counts={this.state.counts}/>
            ) : (
              <Redirect to="/login"/>
            )
          )}/>
          <Route path="/search" render={props => (<SearchPage {...props.location} userinfo={this.state.userinfo} counts={this.state.counts}/>)}/>
          <Route path="/login" render={props => (<LoginPage signIn ={this.signIn.bind(this)} signUp={this.signUp.bind(this)} userinfo={this.state.userinfo} loggedIn={this.state.loggedIn}/>)}/>
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

