import React from 'react';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.username);
  }

  render() {
    return (
      <div>{this.props.username}'s UserPage brub</div>
    );
  }
}

export default UserPage;