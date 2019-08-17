import React from 'react';
import { connect } from 'react-redux';

import { updatePost, deletePost } from '../actions/postsAction';

class MyPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      text: ''
    }
    this.delete = this.delete.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.editMessage = this.editMessage.bind(this);
    this.savedMessage = this.savedMessage.bind(this);
    this.cancelMessage = this.cancelMessage.bind(this);
    this.printText = this.printText.bind(this);
  }

  delete() {
    const { created_at } = this.props.post;
    this.props.dispatch(deletePost(created_at));
  }

  editMessage() {
    const [ message ] = this.props.myMessage.filter(message => {
      return message.created_at === this.props.post.created_at
    });
    this.setState({text: message.text});

  }

  modalOpen() {
    this.setState({
      modal: !this.state.modal
    });
    this.editMessage();
  }

  savedMessage() {
    const { created_at } = this.props.post;
    const { text } = this.state;
    this.props.dispatch(updatePost(created_at, text));
    this.setState({
      modal: !this.state.modal
    });
  }

  cancelMessage() {
    this.setState({
      modal: !this.state.modal
    });
  }

  printText(event) {
    const text = event.target.value;
    this.setState({text});
  }

  render() {
    const { post } = this.props;
    let modal = null;
    if (this.state.modal) {
      modal = <div className="modal">
        <h3>Edit message</h3>
        <textarea
          onChange={this.printText}
          value={this.state.text}  
        />
        <div>
          <button onClick={this.savedMessage}>Ok</button>
          <button onClick={this.cancelMessage}>Cancel</button>
        </div>
      </div>; 
    }

    return (
      <>
      {modal}
      <div className="post left">
        <div className="post-content left">
          <p>{post.text}</p>
          <div className="post-content-other">
            <span className="post-date">{post.created_at}</span>
            <span><span className="like">&#10084;</span> {post.likeCount}</span>
          </div>
          <div className="settings">
            <button onClick={this.modalOpen}><span>&#9745;</span></button>
            <button onClick={this.delete} className="del"><span>&#9746;</span></button>
          </div>
        </div>
      </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    myMessage: state.posts.myposts
  }
}

export default connect(mapStateToProps)(MyPost);