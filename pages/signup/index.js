import React, { useState } from "react";
import PropTypes from "prop-types";
import { setUserLoggedIn } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import Cookie from "js-cookie";
import Image from "next/image";
import SocialLogin from "../../components/Global/SocialLogin";
import { useRouter } from "next/router";
const SignUp = ({ setLoginState }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async () => {
    try {
      const { data } = await apiPost({ account, email, password });
      Cookie.set("me", data.user);
      Cookie.set("token", data.token);
      dispatch(closeLoginModal());
      dispatch(setUserLoggedIn(data));
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="w-full max-w-760px px-15px flex flex-col items-center justify-center min-h-60vh py-50px text-center  mx-auto">
      <div className="mb-20px sm:mb-50px">
        <Image src={"/images/O.HI.O-footer.svg"} width={200} height={100} />
      </div>
      <h2 className="text-xl mb-20px sm:text-2xl">註冊帳號</h2>
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
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>
      <div className="my-10px w-full text-left text-sm text-red-600">
        此帳戶已註冊過，請登入
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
      <div className="my-10px text-left w-full text-sm text-red-600">
        密碼需為 6 碼以上的英文或數字
      </div>
      <p className="my-10px text-sm">或用以下註冊</p>

      <SocialLogin />
      <p className="text-sm my-20px px-10px">
        按下註冊鈕的同時，表示您已詳閱我們的
        <span className="underline cursor-pointer">資料使用政策與使用條款</span>
        ，同意使用 O-HI-O 所提供的服務並訂閱電子報。
      </p>

      <button
        className="rounded w-full bg-main-pink text-white py-10px my-20px"
        onClick={() => handleSignUp()}
      >
        註冊
      </button>
      <p className="text-sm my-20px">
        已經有帳號了？{" "}
        <strong
          className="cursor-pointer text-main-pink underline"
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
