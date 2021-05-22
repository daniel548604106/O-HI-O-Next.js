import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
const ConfirmShoppingList = ({ checkoutList }) => {
  const total = useSelector((state) => state.checkout.total);
  return (
    <div>
      <div className="w-full py-5px mb-10px border-b">
        <span className="bg-main-pink text-white px-10px py-5px rounded-t">
          購物明細
        </span>
      </div>
      {checkoutList.map((list, idx) => (
        <div key={list._id} className="relative w-full border rounded">
          <p className="bg-gray-100 p-5px text-white">
            <span className={classes.number}>{idx + 1}. </span>
            {list.name}
          </p>
          <div className="p-10px">
            <li className="py-5px border-t">
              單價： ${list.discountPrice || list.fullPrice}
            </li>
            <li className="py-5px border-t">數量： {list.quantity}</li>
            <li className="py-5px border-t">
              庫存狀態:{" "}
              <span className="text-yellow-300">無 (下單馬上進貨）</span>
            </li>
            <li className="py-5px">
              商品總額：
              <span className="text-main-pink">
                $ {list.quantity * (list.discountPrice || list.fullPrice)}
              </span>
            </li>
          </div>
        </div>
      ))}
      <div className="mb-20px flex p-10px border-t-4 bg-bg-white items-center justify-between">
        <p>訂單總額</p>
        <p>
          NT$ <span className="font-semibold text-main-pink">{total}</span>元
        </p>
      </div>
    </div>
  );
};

ConfirmShoppingList.propTypes = {
  checkoutList: PropTypes.array,
};

export default ConfirmShoppingList;
