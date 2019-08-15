import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog';
import WelcomeModal from './components/WelcomeModal';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
      {avatar: "https://i.pravatar.cc/300?img=5", created_at: "2019-07-11 14:30:11", id: "9333000183101", marked_read: false, message: "Hey, guys! Have you seen the new episode of 'Stranger Things'?", user: "Kate"},
      {avatar: "https://i.pravatar.cc/300?img=14", created_at: "2019-07-11 15:04:45", id: "9333000183102", marked_read: false, message: "Nay, not yet :-(", user: "Dave"},
      {avatar: "https://i.pravatar.cc/300?img=12", created_at: "2019-07-12 10:23:00", id: "9333000183103", marked_read: false, message: "I have! Let’s discuss it)", user: "Taylor"},
      {avatar: "https://i.pravatar.cc/300?img=14", created_at: "2019-07-12 10:24:32", id: "9333000183104", marked_read: false, message: "No spoilers!!! I will watch it asap.", user: "Dave"},
      {avatar: "https://i.pravatar.cc/300?img=31", created_at: "2019-07-12 10:29:03", id: "9333000183105", marked_read: false, message: "Oh, Dave! But please, hurry up!", user: "Kim"},
      {avatar: "https://i.pravatar.cc/300?img=14", created_at: "2019-07-12 10:34:47", id: "9333000183106", marked_read: false, message: "I have to finish my Academy task at Binary and afterwards I will watch it.", user: "Dave"},
      {avatar: "https://i.pravatar.cc/300?img=5", created_at: "2019-07-12 10:35:19", id: "9333000183107", marked_read: false, message: "Oh, btw how do you like the Academy?", user: "Kate"},
      {avatar: "https://i.pravatar.cc/300?img=14", created_at: "2019-07-12 10:35:57", id: "9333000183108", marked_read: false, message: "It’s quite tough but I like it.", user: "Dave"},
      {avatar: "https://i.pravatar.cc/300?img=12", created_at: "2019-07-12 10:37:50", id: "9333000183109", marked_read: false, message: "Alright, Dave. Work on your task and don’t you dare to be online here until you are ready with the Academy stuff!", user: "Taylor"},
      {avatar: "https://i.pravatar.cc/300?img=14", created_at: "2019-07-12 10:41:21", id: "9333000183100", marked_read: false, message: "cheers ;-)", user: "Dave"}
    ]};
  }
  render() {
    return (
      <div className="app">
        <Blog data={this.state.data}></Blog>
        <WelcomeModal />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.querySelector('#root')
);