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