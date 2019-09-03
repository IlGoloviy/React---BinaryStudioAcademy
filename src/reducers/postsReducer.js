export default function reducer(state = {
    posts: [],
    myposts: [],
    countPosts: 0,
    timeLastPost: '',
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
      case 'DELETE_POST': {
        return {
          ...state,
          myposts: state.myposts.filter(post => post.created_at !== action.payload)
        }
      }
      case 'UPDATE_POST': {
        const arr = state.myposts.filter(post => post.created_at !== action.payload.time);
        const [ post ] = state.myposts.filter(post => post.created_at === action.payload.time);
        post.text = action.payload.text;
        return {
          ...state,
          myposts: [...arr, post]
        }
      }
      case 'TIME_LAST_MESSAGE': {
        return {
          ...state,
          timeLastPost: action.payload
        }
      }

    }
  
    return state;
  }