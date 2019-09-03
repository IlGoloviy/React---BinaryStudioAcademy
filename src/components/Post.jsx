import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
      likeNum: 2
    }
    this.setLike = this.setLike.bind(this);
  }

  setLike() {
    this.setState({like: !this.state.like});
  }

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
            <span> 
              <span 
                onClick={this.setLike} 
                className={this.state.like ? `like enter-like` : `like`}
              >&#10084;</span> 
              {this.state.like 
                ? this.state.likeNum+1 
                : this.state.likeNum}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;