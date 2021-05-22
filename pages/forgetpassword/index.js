import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const index = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  return (
    <div className="align-middle text-center max-w-760px mx-auto sm:py-100px py-20px px-15px">
      <Image
        className="mb-20px"
        src={"/images/O.HI.O-footer.svg"}
        width={200}
        height={100}
      />
      <h2 className="mb-20px text-xl font-semibold">重設密碼</h2>

      <p className="mb-20px text-sm text-left sm:text-center">
        請輸入您註冊的 Email,我們會發送一份信件，點擊信件中的連結以重設密碼
        <br />
        <br />
        找不到認證信時，請到 <strong>垃圾郵件</strong> 分類查找，或在信箱搜尋
        O.HI.O
      </p>
      <div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className="w-full border mb-10px rounded px-10px py-10px "
        />
      </div>
      <button
        className={`mb-30px cursor-default w-full py-10px bg-gray-100 text-white ${
          email !== "" && "bg-main-pink cursor-pointer "
        }`}
      >
        送出
      </button>
      <button className="text-sm" onClick={() => router.back()}>
        回上一頁
      </button>
    </div>
  );
};

export default index;
