import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.text = React.createRef();
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage() {
    const text = this.text.current.value;
    const time = new Date();
    const likeCount = 0;
    const data = {
      text: text,
      time: time,
      likeCount: likeCount
    }
    this.props.setData(data);
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

export default InputForm;