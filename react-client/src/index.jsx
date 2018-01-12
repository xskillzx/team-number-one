import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import SearchPage from './containers/SearchPage.jsx';
import HomePage from './containers/HomePage.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: [],
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

  componentDidMount() {
    let settings = {
      url: '/api/userinfo/1',
      method: 'GET',
      contentType: "application/json",
    }

    $.ajax(settings).done(data => {
      this.setState({userinfo: data}, () => console.log(this.state.userinfo));
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
          onChangeHandler={this.onInputChangeHandler.bind(this)}/>
        <Switch>
          <Route exact path="/" render={props => (<HomePage/>)}/>
          <Route path="/search" render={props => (<SearchPage {...props.location}/>)}/>
          <Route path="/login" render={props => (<span>Login Page</span>)}/>
          <Route path="/:username" render={props => (<HomePage username={props.match.params.username}/>)}/>
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
