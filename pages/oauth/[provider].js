import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { apiPostOauthLogin } from "../../api/index";
import { setUserLoggedIn } from "../../redux/actions/userAction";
import Loader from "../../components/Global/Loader";
import Cookie from "js-cookie";
const OAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    console.log(router);
    const { provider, code } = router.query;
    const postOauthLogin = async () => {
      console.log("started");
      try {
        const { data } = await apiPostOauthLogin({ type: provider, code });
        Cookie.set("me", data.user);
        Cookie.set("token", data.token);
        router.push("/");
        console.log("success");
        dispatch(setUserLoggedIn(data.user));
      } catch (error) {
        router.push("/");
      }
    };
    postOauthLogin();
  }, [router.query, router.params]);

  return (
    <div style={{ width: "100vw", zIndex: 16, minHeight: "60vh" }}>
      <Loader />
    </div>
  );
};

export default OAuth;
