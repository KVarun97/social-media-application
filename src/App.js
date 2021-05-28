import React from "react";
import { Provider } from "react-redux";
import Posts from "./pages/posts/posts";
import SnackBar from "./components/snackbar/snackbar";
import { store } from "./store/store";

import "./App.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <SnackBar />
        <Posts />
      </Provider>
    </div>
  );
}

export default App;
