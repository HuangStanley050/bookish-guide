import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "../store/setupStore";
import React from "react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
};
MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  //Anything returned here can be access by the client
  return { pageProps: pageProps };
};
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
