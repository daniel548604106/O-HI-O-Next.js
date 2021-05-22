import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import Header from "../components/Global/Header";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
