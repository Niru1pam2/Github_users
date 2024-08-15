import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

//domain dev-pytl84pka6wl11c3.us.auth0.com
//clietn id 1IpaJfbn1QZhWQsDagYYaAiOi2va1UIe
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-pytl84pka6wl11c3.us.auth0.com"
      clientId="1IpaJfbn1QZhWQsDagYYaAiOi2va1UIe"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
