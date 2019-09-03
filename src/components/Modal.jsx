import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: false};

    this.modalOnOf = this.modalOnOf.bind(this);
  }

  modalOnOf() {
    this.setState({
      display: !this.state.display
    });
  }

  render() {
    let modal = null;
    if (this.state.display) {
      modal = <div className="modal">
        <h3>Hello my friend</h3>
        <p>I'm the most successful person ever to run for the presidency, by far. Nobody's ever been more successful than me. I'm the most successful person ever to run. Ross Perot isn't successful like me. Romney ― I have a Gucci store that's worth more than Romney. Sorry losers and haters, but my IQ is one of the highest ― and you all know it! Please don't feel so stupid or insecure, it's not your fault.</p>
        <button onClick={this.modalOnOf}>Hi</button>
      </div>;  
    }

    return modal;
  }

  componentDidMount() {
    this.modalOnOf();
  }
}

export default Modal;