import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import storage from "./redux/store";
import App from "./components/App/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={storage.store}>
        <PersistGate loading={null} persistor={storage.persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
