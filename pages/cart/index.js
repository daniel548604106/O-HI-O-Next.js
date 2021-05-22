import React, { useEffect, useState } from "react";
import ProgressBar from "../../components/Cart/ProgressBar";
// import CartPayment from "./Payment/Payment.jsx";
// import CartListInfo from "../../components/Cart/CartListInfo/CartListInfo.jsx";
// import CartConfirm from "./Confirm/Confirm.jsx";
// import CartComplete from "./Complete/Complete.jsx";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Checkout = () => {
  const router = useRouter();
  const { params } = router;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [process, setProcess] = useState(0);
  useEffect(() => {
    console.log(router);
  }, []);
  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
      {/* {/* {params.status !== "complete" && (
        <div className="w-full max-w-760px mx-auto mt-30px mb-50px">
          <ProgressBar />
        </div>
      )} */}
      cart
      {/* {!params.status && (
        <div>
          <CartListInfo cartItems={cartItems} />
        </div>
      )}
      {params.status === "payment" && (
        <div>
          <CartPayment />
        </div>
      )}
      {params.status === "confirm" && (
        <div>
          <CartConfirm />
        </div>
      )}
      {params.status === "complete" && (
        <div>
          <CartComplete />
        </div>
      )}{" "}
      */}{" "}
      */}
    </div>
  );
};

export default Checkout;
