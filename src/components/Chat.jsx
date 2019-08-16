import React from 'react';
import { connect } from 'react-redux';

import Post from './Post';
import InputForm from './InputForm';
import MyPost from './MyPost';
import InfoBlock from './InfoBlock';

import { fetchPosts, setCountMessage } from '../actions/postsAction';

class Chat extends React.Component {

  render() {
    const myPosts = this.props.myMessage.map((post, index) => {
      return (
        <MyPost key={index} post={post}></MyPost>
      );
    });
    const posts = this.props.message.map(post => {
      return (
        <Post key={post.id} post={post}></Post>
      );
    });
  
    if (this.props.message.length != 0) {
      const postsList = [...myPosts, ...posts].sort((a, b) => {
        if (a.props.post.created_at > b.props.post.created_at) return 1;
        if (a.props.post.created_at < b.props.post.created_at) return -1;
      });
      this.props.dispatch(setCountMessage(postsList.length));

      return(
        <>
        <InfoBlock></InfoBlock>
        <div className="blog">
          {postsList}
        </div>
        <InputForm></InputForm>
        </>
      );
    } else {
      return (
        <>
        <InfoBlock />
        <div className="blog">
          <div className="spiner"></div>
        </div>
        <InputForm />
        </>
      );
    }

    
  }

  componentDidMount() {
    if (!this.props.message.length) {
      this.props.dispatch(fetchPosts());
    }
  }
}

function mapStateToProps(state) {
  return {
    message: state.posts.posts,
    myMessage: state.posts.myposts
  }
}

export default connect(mapStateToProps)(Chat);