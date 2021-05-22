import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCheckoutProgress,
  resetCartItems,
} from "../../redux/actions/cartAction";
import { resetCheckoutList } from "../../redux/actions/checkoutAction";
import ConfirmShoppingList from "./ConfirmShoppingList";
// import { apiPostNewOrder } from "../../api/orderRequest";
import { useRouter } from "next/router";
const CartConfirm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const checkoutInfo = useSelector((state) => state.checkout);
  const checkoutDetail = useSelector((state) => state.checkout.checkoutDetail);
  const checkoutList = useSelector((state) => state.checkout.checkoutList);
  const { personalInfo, deliveryMethod, paymentMethod } = checkoutDetail;

  const user = useSelector((state) => state.user.currentUser);
  const backToPayment = () => {
    dispatch(updateCheckoutProgress(2));
    router.push("/cart/payment");
  };
  const handleSubmitOrder = async () => {
    try {
      const { data } = await apiPostNewOrder(checkoutInfo);
      router.push(`/cart/complete/${data.newOrder._id}`);
      dispatch(resetCartItems());
      dispatch(resetCheckoutList());
    } catch (error) {
      console.log("很抱歉！交易失敗！請重新再試一次");
    }
  };
  return (
    <div>
      <p className="mb-50px">
        親愛的
        <span className="text-light-blue">
          {user && user.name} ({user && user.email.split("@")[0]})
        </span>{" "}
        您好，請確認以下購物資訊是否正確
      </p>
      <div className="w-full py-5px border-b">
        <span className="bg-main-pink text-white px-10px py-5px rounded-top">
          付款方式與寄送資訊
        </span>
      </div>
      <ConfirmShoppingList />
      <div className="mb-30px mt-10px border px-10px py-20px">
        <ul>
          <li className="mb-20px">
            <span className="inline-block min-w-100px">配送方式</span>
            {deliveryMethod}
          </li>
          <li className="mb-20px">
            <span className="inline-block min-w-100px">付款方式</span>
            {paymentMethod}
          </li>
          <li className="mb-20px">
            <span className="inline-block min-w-100px">收件者 </span>
            {personalInfo.name}
          </li>
          <li className="mb-20px">
            <span className="inline-block min-w-100px">聯絡電話</span>
            {personalInfo.phone}
          </li>
          <li className="mb-20px">
            <span className="inline-block min-w-100px">Email </span>
            {personalInfo.email}
          </li>
          <li className="mb-20px">
            <span className="inline-block min-w-100px">取貨門市</span>
            89156-領航-桃園市中壢區領航北路二段239號1樓
          </li>
          <li className="mb-20px">
            <span className="inline-block min-w-100px">發票類型</span>
            二聯電子發票博客來會員載具
          </li>
        </ul>
      </div>
      <div className="w-full flex items-center justify-end mb-100px">
        <div onClick={() => backToPayment()}>
          <Button
            text="上一步"
            backgroundColor="white"
            color="black"
            border="true"
          />
        </div>
        <div className="ml-10px" onClick={() => handleSubmitOrder()}>
          <Button text="確認送出" />
        </div>
      </div>
    </div>
  );
};

export default CartConfirm;
