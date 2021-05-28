const initialState = {
  posts: [],
  loading: false,
  snackbarOpen: false,
  snackbarMessage: "",
  snackbarSeverity: "info",
};

export default (state = initialState, payload) => {
  switch (payload.type) {
    case "SNACKBAR_OPEN":
      return {
        ...state,
        snackbarOpen: true,
        snackbarMessage: payload.data.message,
        snackbarSeverity: payload.data.severity,
      };
    case "SNACKBAR_CLEAR":
      return {
          ...state,
          snackbarOpen: false
      }
    case "GET_POSTS_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        posts: payload.data,
        loading: false
      };
    default:
      return { ...state };
  }
};
