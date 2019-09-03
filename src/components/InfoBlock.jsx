import React from 'react';
import { connect } from 'react-redux';

class InfoBlock extends React.Component {
  render() {
    const users = this.props.message.map(message => {
      return message.user;
    });
    const countUsers = users.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    return (
      <div className="info-block">
        <div className="info-block-content">
          <h1>My chat</h1>
          <div className="info-block-amount">
            <h3>{countUsers.length + 1} users</h3>
            <h3>{this.props.countMessage} messages</h3>
          </div>
          <h5>last message at {this.props.lastMessage}</h5>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    countMessage: state.posts.countPosts,
    message: state.posts.posts,
    lastMessage: state.posts.timeLastPost
  }
}

export default connect(mapStateToProps)(InfoBlock);