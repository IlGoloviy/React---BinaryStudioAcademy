import React from 'react';
import Post from './Post';
import InputForm from './InputForm';
import MyPost from './MyPost';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.myMessage = this.myMessage.bind(this);
  }

  myMessage(data) {
    this.setState({
      data: [...this.state.data, data]
    });
  }

  render() {
    const myPosts = this.state.data.map((post, index) => {
      return (
        <MyPost key={index} post={post}></MyPost>
      );
    });
    const posts = this.props.data.map(post => {
      return (
        <Post key={post.id} post={post}></Post>
      );
    });
    let renderPost = [...posts, ...myPosts];

    return(
      <>
      <div className="blog">
        {renderPost}
      </div>
      <InputForm setData={this.myMessage}></InputForm>
      </>
    );
  }
}

export default Blog;