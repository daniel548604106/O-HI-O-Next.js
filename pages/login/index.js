import React, { useState } from "react";
import PropTypes from "prop-types";
// import { apiPostLogin } from "../../../api/index";
import { setUserLoggedIn } from "../../redux/actions/userAction";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
const Login = ({ setLoginState }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const { data } = await apiPostLogin({ account, password });
      Cookie.set("me", data.user);
      Cookie.set("token", data.token);
      dispatch(closeLoginModal());
      dispatch(setUserLoggedIn(data));

      notify("登入成功！");
    } catch (error) {
      notify("登入失敗！請重新再登入一次");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-90vh py-20px text-center max-w-1200px mx-auto">
      <h2 className="text-xl mb-20px">用 O-HI-O 帳號登入</h2>
      <div className="mb-10px">
        <label htmlFor="account">帳號</label>
        <input
          placeholder="Email"
          className=" ml-10px bg-gray-100 rounded-sm px-10px py-5px"
          onChange={(e) => setAccount(e.target.value)}
          type="email"
        />
      </div>
      <div className="mb-10px">
        <label htmlFor="password">密碼</label>
        <input
          placeholder="Password"
          className="ml-10px bg-gray-100 rounded-sm px-10px py-5px"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <button
        className="text-main-pink my-10px"
        onClick={() => router.push("forgetpassword")}
      >
        忘記密碼
      </button>
      <div
        className="w-200px my-10px  px-10px py-10px border rounded"
        onClick={() => handleLogin()}
      >
        登入
      </div>
      <p className="my-10px text-sm">
        還不是會員嗎？{" "}
        <strong
          className="underline text-main-pink"
          onClick={() => router.push("signup")}
        >
          立刻註冊帳號
        </strong>
      </p>
      <button className="text-sm my-10px" onClick={() => router.back()}>
        回上一頁
      </button>
    </div>
  );
};

Login.propTypes = {
  setLoginState: PropTypes.func,
};

export default Login;
