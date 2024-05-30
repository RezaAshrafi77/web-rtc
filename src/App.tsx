import { RawIntlProvider, createIntl, createIntlCache } from "react-intl";
import { ToastContainer } from "react-toastify";
// import store from "./store/store";
import { Provider } from "react-redux";
import "./styles/globals.scss";
import Router from "./router";
// @ts-nocheck

const cache = createIntlCache();

const intl = createIntl(
  {
    locale: "fr-FR",
    messages: {},
  },
  cache
);

export default function App() {
  return (
    <RawIntlProvider value={intl}>
      {/* <Provider store={store}> */}
        <Router />
      {/* </Provider> */}
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </RawIntlProvider>
  );
}
