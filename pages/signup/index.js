import React, { useState } from "react";
import PropTypes from "prop-types";
import { setUserLoggedIn } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
const SignUp = ({ setLoginState }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [account, setAccount] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async () => {
    try {
      const { data } = await apiPost({ account, email, password });
      Cookie.set("me", data.user);
      Cookie.set("token", data.token);
      dispatch(closeLoginModal());
      dispatch(setUserLoggedIn(data));
      notify("登入成功！");
    } catch (error) {
      notify("登入失敗！請重新再試一次");
    }
  };
  return (
    <div className=" flex flex-col items-center justify-center h-90vh text-center px-15px max-w-1200px mx-auto">
      <h2 className="text-xl mb-20px">註冊帳號</h2>

      <div>
        <label className="text-right" htmlFor="account">
          信箱
        </label>
        <input
          placeholder="Email"
          className="rounded ml-10px bg-gray-100 px-10px py-5px mb-10px"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
        />
      </div>
      <div className="mb-10px text-sm text-red-600">此帳戶已註冊過，請登入</div>
      <div>
        <label htmlFor="password">密碼</label>
        <input
          placeholder="Password"
          className="rounded ml-10px bg-gray-100 px-10px py-5px mb-10px"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
        />
        <div className="mb-10px text-sm text-red-600">
          密碼需為 6 碼以上的英文或數字
        </div>
      </div>
      <p className="text-sm my-20px px-10px">
        按下註冊鈕的同時，表示您已詳閱我們的
        <span className="underline">資料使用政策與使用條款</span>
        ，同意使用 O-HI-O 所提供的服務並訂閱電子報。
      </p>
      <button
        className="rounded bg-main-pink text-white w-200px py-10px my-20px"
        onClick={() => handleSignUp()}
      >
        註冊
      </button>
      <p className="text-sm my-20px">
        已經有帳號了？{" "}
        <strong
          className="text-main-pink underline"
          onClick={() => router.push("login")}
        >
          馬上登入
        </strong>
      </p>
      <button className="text-sm" onClick={() => router.back()}>
        回上一頁
      </button>
    </div>
  );
};

SignUp.propTypes = {
  setLoginState: PropTypes.func,
};

export default SignUp;
