export default {
  initialState: {
    API: {
      status: 'idle',
    },
  },
  actionTypes: {
    SEARCH_API_START: 'SEARCH_API_START',
    SEARCH_API_SUCCESS: 'SEARCH_API_SUCCESS',
    SEARCH_API_ERROR: 'SEARCH_API_ERROR',
  },
  helpers: {
    subRedditURL: (sub) => `https://www.reddit.com/r/${sub}/.json`
  }
}
