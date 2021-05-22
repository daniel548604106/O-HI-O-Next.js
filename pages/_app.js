import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/Global/Header";
import SideMenu from "../components/Global/SideMenu";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <div className={`${router.pathname === "/application" && "hidden"}`}>
        <Header />
      </div>
      <SideMenu />
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
