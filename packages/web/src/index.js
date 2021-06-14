import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { IntlProvider } from "react-intl";
import reportWebVitals from "./reportWebVitals";

import store, { persistor } from "./redux/store";

import App from "./App";
import "./styles/tailwind.css";

import messagesEN from "./utils/translations/en.json";
import messagesES from "./utils/translations/es.json";
import messagesCAT from "./utils/translations/ca.json";

const messages = {
  en: messagesEN,
  es: messagesES,
  cat: messagesCAT,
};

const localeProp = navigator.language.split(/[-_]/)[0];
const defaultLocale = "en";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <IntlProvider
            locale={localeProp}
            key={localeProp}
            defaultLocale={defaultLocale}
            messages={messages[localeProp]}
          >
            <App />
          </IntlProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
