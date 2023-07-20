import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
      domain="dev-a7fp1ssi6743ffp4.us.auth0.com"
      clientId="ST34FAPnRm4qUbECucMhH5uREqqe5QXq"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
);
