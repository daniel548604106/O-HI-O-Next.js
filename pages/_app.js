import "../styles/globals.css";
import "swiper/swiper.scss";
import { persistor, store } from "../redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import Footer from "../components/Global/Footer";
import Header from "../components/Global/Header";
import { PersistGate } from "redux-persist/integration/react";
import SideMenu from "../components/Global/SideMenu";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className={`${router.pathname === "/application" && "hidden"}`}>
            <Header />
          </div>
          <SideMenu />
          <Component {...pageProps} />;
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
