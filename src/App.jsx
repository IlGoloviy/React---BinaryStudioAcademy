import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Chat from './components/Chat';
import store from './store';

import './style.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        <Chat></Chat>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#root')
);