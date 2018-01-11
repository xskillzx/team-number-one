import React from 'react';
import WritePost from './WritePost.jsx';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      writePostValue: ''
    };
  }

  writePostHandler() {
    // TODO
  }

  onPostInputChangeHandler(e) {
    this.setState({writePostValue: e.target.value});
  }

  render() {
    return (
      <div className="home">
        <WritePost
          writePostValue={this.state.writePost}
          onPostInputChangeHandler={this.onPostInputChangeHandler.bind(this)}
          writePostHandler={this.writePostHandler.bind(this)}
        />
      </div>
    );
  }
}

export default HomePage;
