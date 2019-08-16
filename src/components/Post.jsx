import React from 'react';

class Post extends React.Component {
  render() {
    const post = this.props.post;

    return (
      <div className="post">
        <img className="post-img" src={post.avatar} />
        <div className="post-content">
          <h5>{post.user}</h5>
          <p>{post.message}</p>
          <div className="post-content-other">
            <span className="post-date">{post.created_at}</span>
            <span>&#10084; 3</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;