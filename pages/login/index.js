import React, { useState } from "react";
import PropTypes from "prop-types";
// import { apiPostLogin } from "../../../api/index";
import { setUserLoggedIn } from "../../redux/actions/userAction";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Image from "next/image";
import SocialLogin from "../../components/Global/SocialLogin";
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
    } catch (error) {
      console.log("失敗");
    }
  };
  return (
    <div className="px-15px w-full max-w-760px flex flex-col items-center justify-center min-h-60vh sm:py-50px  py-20px text-center  mx-auto">
      <div className="mb-20px sm:mb-30px">
        <Image src={"/images/O.HI.O-footer.svg"} width={200} height={100} />
      </div>

      <h2 className="text-xl sm:text-3xl mb-20px sm:mb-50px">帳號登入</h2>
      <div className="mb-10px  sm:flex-col text-left  w-full flex items-center sm:items-start">
        <label
          htmlFor="account"
          className="whitespace-nowrap text-md sm:text-lg mr-10px sm:mb-10px"
        >
          帳號
        </label>
        <input
          placeholder="Email"
          className="w-full border  rounded-md px-10px py-10px"
          onChange={(e) => setAccount(e.target.value)}
          type="email"
        />
      </div>
      <div className="mb-10px sm:flex-col w-full flex text-left items-center sm:items-start">
        <label
          htmlFor="password"
          className="whitespace-nowrap mr-10px sm:mb-10px"
        >
          密碼
        </label>
        <input
          placeholder="Password"
          className=" w-full  border  rounded-md px-10px py-10px "
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
      <button
        className=" w-full my-10px  px-10px py-10px border rounded"
        onClick={() => handleLogin()}
      >
        登入
      </button>
      <p className="my-20px text-sm sm:text-lg">或用以下帳號繼續</p>
      <SocialLogin />
      <p className="my-10px text-sm">
        還不是會員嗎？{" "}
        <strong
          className="cursor-pointer underline text-main-pink"
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
