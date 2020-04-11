import App from "next/app";
import { Provider } from "react-redux";
import React from "react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={{ none: "none" }}>
      <Component {...pageProps} />;
    </Provider>
  );
};

export default MyApp;
