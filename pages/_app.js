import "../styles/globals.css";
import "swiper/swiper.scss";
import store from "../redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import Footer from "../components/Global/Footer";
import Header from "../components/Global/Header";
import Head from "next/head";
import SideMenu from "../components/Global/SideMenu";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Provider store={store}>
        <div className={`${router.pathname === "/application" && "hidden"}`}>
          <Header />
        </div>
        <SideMenu />
        <Component {...pageProps} />;
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
