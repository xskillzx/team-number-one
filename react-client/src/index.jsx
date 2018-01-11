import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import SearchPage from './components/SearchPage.jsx';
<<<<<<< HEAD
import HomePage from './components/HomePage.jsx';
=======
import HomePage from './containers/HomePage.jsx';
>>>>>>> Added placeholders to userinfo

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
        <NavBar
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
