export default function reducer(state = {
    posts: [],
    myposts: [],
    countPosts: 0,
    fetching: false,
    fetched: false,
    error: null
  }, action) {
    
    switch (action.type) {
      case 'FETCH_POSTS': {
        return {...state, fetching: true}
      }
      case 'FETCH_POSTS_REJECTED': {
        return {
          ...state, 
          fetching: false, 
          error: action.payload
        }
      }
      case 'FETCH_POSTS_FULFILLED': {
        return {
          ...state, 
          fetching: false, 
          fetched: true, 
          posts: action.payload
        }
      }
      case 'COUNT_MESSAGE': {
        return {
          ...state,
          countPosts: action.payload
        }
      }
      case 'ADD_MY_POST': {
        return {
          ...state,
          myposts: [action.payload, ...state.myposts]
        }
      }

    }
  
    return state;
  }