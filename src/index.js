import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { pokemonsReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import { logger } from "./middlewares";
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composedAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composedAlt(applyMiddleware(thunk,logger)
);
const store = createStore(pokemonsReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
