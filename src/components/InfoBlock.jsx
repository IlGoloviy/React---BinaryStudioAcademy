import React from 'react';
import { connect } from 'react-redux';

class InfoBlock extends React.Component {
  render() {
    if (this.props.message != 0) {
      const posts = this.props.message.sort((a, b) => {
        if (a.created_at > b.created_at) return 1;
        if (a.created_at < b.created_at) return -1;
      });
      const users = posts.map(message => {
        return message.user;
      });
      const countUsers = users.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
      const time = posts[posts.length-1].created_at;

      return (
        <div className="info-block">
          <div className="info-block-content">
            <h1>My chat</h1>
            <div className="info-block-amount">
              <h3>{countUsers.length + 1} users</h3>
              <h3>{this.props.countMessage} messages</h3>
            </div>
            <h5>last message at {time}</h5>
          </div>
        </div>
      );
    } else {
      return (
        <div className="info-block">
          <div className="info-block-content">
            <h1>My chat</h1>
            <div className="info-block-amount">
              <h3>0 users</h3>
              <h3>0 messages</h3>
            </div>
            <h5> </h5>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    countMessage: state.posts.countPosts,
    message: state.posts.posts
  }
}

export default connect(mapStateToProps)(InfoBlock);