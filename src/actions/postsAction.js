import axios from 'axios';

export function fetchPosts() {
  return {
    type: 'FETCH_POSTS',
    payload: 
      axios.get(`https://api.myjson.com/bins/1hiqin`)
      .then(res => res.data)
  }
}

export function setCountMessage(n) {
  return {
    type: 'COUNT_MESSAGE',
    payload: n
  }
}

export function addMyPost(data) {
  return {
    type: 'ADD_MY_POST',
    payload: data
  }
}

export function updatePost(time, text) {
  return {
    type: 'UPDATE_POST',
    payload: {time, text}
  }
}

export function deletePost(time) {
  return {
    type: 'DELETE_POST',
    payload: time
  }
}

export function setTimeLastMessage(time) {
  return {
    type: 'TIME_LAST_MESSAGE',
    payload: time
  }
}