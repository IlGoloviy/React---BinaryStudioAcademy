import React from 'react';

class MyPost extends React.Component {
  render() {
    const post = this.props.post;
    let d = post.time;
    const time = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    return (
      <div className="post left">
        <div className="post-content left">
          <p>{post.text}</p>
          <div className="post-content-other">
            <span className="post-date">{time}</span>
            <span>&#10084; {post.likeCount}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPost;