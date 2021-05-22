import React from "react";
import { useSelector } from "react-redux";
const CartProgressBar = () => {
  const progress = useSelector((state) => state.cart.checkoutProgress);
  return (
    <div className="flex items-center">
      <div
        className={`min-w-30px min-h-30px flex items-center justify-center text-sm text-white bg-bg-white ${
          progress >= 1 && "bg-main-pink"
        }`}
      >
        1
        <span
          className={` absolute top-0 text-bg-white left-1/2  transform -translate-x-1/2 -translate-y-full  ${
            progress >= 1 && "text-main-pink"
          }`}
        >
          購物明細
        </span>
      </div>
      <div
        className={`min-w-30px min-h-30px flex items-center justify-center text-sm text-white bg-bg-white ${
          progress >= 2 && "bg-main-pink"
        }`}
      ></div>
      <div
        className={`min-w-30px min-h-30px flex items-center justify-center text-sm text-white bg-bg-white ${
          progress >= 2 && "bg-main-pink"
        }`}
      >
        2
        <span
          className={` absolute top-0 text-bg-white left-1/2  transform -translate-x-1/2 -translate-y-full  ${
            progress >= 2 && "text-main-pink"
          }`}
        >
          付款方式
        </span>
      </div>
      <div
        className={`w-full h-5px bg-bg-white ${
          progress >= 3 && "text-main-pink"
        }`}
      ></div>
      <div
        className={`min-w-30px min-h-30px flex items-center justify-center text-sm text-white bg-bg-white ${
          progress >= 3 && "bg-main-pink"
        }`}
      >
        3
        <span
          className={`min-w-30px min-h-30px flex items-center justify-center text-sm text-white bg-bg-white ${
            progress >= 3 && "bg-main-pink"
          }`}
        >
          最後確認
        </span>
      </div>
    </div>
  );
};

export default CartProgressBar;
