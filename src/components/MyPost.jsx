import React from 'react';

class MyPost extends React.Component {
  render() {
    const { post } = this.props;

    return (
      <div className="post left">
        <div className="post-content left">
          <p>{post.text}</p>
          <div className="post-content-other">
            <span className="post-date">{post.created_at}</span>
            <span><span className="like">&#10084;</span> {post.likeCount}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPost;