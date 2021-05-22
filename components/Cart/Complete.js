import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Complete = () => {
  const router = useRouter();
  const [orderId, setOrderId] = useState("");
  // useEffect(() => {
  //   const { id } = location;
  //   setOrderId(id);
  // }, [location]);
  return (
    <div className="flex items-center justify-center flex-col w-screen max-w-760px px-15px mx-auto text-center">
      <h2 className="mt-50px sm:mt-100px mb-30px">
        感謝您的訂購， 我們將會盡快為您送達商品!
      </h2>
      <p>
        您的訂單編號為: <span>{orderId}</span>
      </p>
      <div
        onClick={() => router.push(`/my/purchase/unpaid`)}
        className="mt-30px w-full"
      >
        <button className="rounded border w-full py-10px">前往查看訂單</button>
      </div>
    </div>
  );
};

export default Complete;
