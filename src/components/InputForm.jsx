import React from 'react';
import { connect } from 'react-redux';

import { addMyPost } from '../actions/postsAction';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.text = React.createRef();
    this.sendMessage = this.sendMessage.bind(this);
  }

  formatDate(d) {
    let month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let day = (`${d.getDate()}`.length == 1) 
      ? '0' + `${d.getDate()}` : d.getDate();
    let hour = (`${d.getHours()}`.length == 1) 
      ? '0' + `${d.getHours()}` : d.getHours();
    let minute = (`${d.getMinutes()}`.length == 1) 
      ? '0' + `${d.getMinutes()}` : d.getMinutes();
    let second = (`${d.getSeconds()}`.length == 1) 
      ? '0' + `${d.getSeconds()}` : d.getSeconds();
    return `${d.getFullYear()}-${month[d.getMonth()]}-${day} 
            ${hour}:${minute}:${second}`;
  }

  sendMessage() {
    const text = this.text.current.value;
    const created_at = new Date();
    const likeCount = 0;
    const data = {
      text,
      created_at: this.formatDate(created_at),
      likeCount
    }
    this.props.dispatch(addMyPost(data));
    this.text.current.value = '';
  }

  render() {
    return (
      <div className="form">
        <textarea ref={this.text} rows="1"></textarea>
        <button onClick={this.sendMessage}>SEND</button>
      </div>
    );
  }
}

export default connect()(InputForm);