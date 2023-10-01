import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import "./index.css";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>
);
