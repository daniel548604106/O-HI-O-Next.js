import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/Global/Header";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <div className={`${router.pathname === "/application" && "hidden"}`}>
        <Header />
      </div>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
