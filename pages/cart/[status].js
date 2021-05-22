import React, { useEffect } from "react";
import Complete from "../../components/Cart/Complete";
import Confirm from "../../components/Cart/Confirm";
import { useRouter } from "next/router";
const Status = () => {
  const router = useRouter();
  const { status } = router.query;

  return (
    <div>
      {status === "complete" && <Complete />}
      {status === "confirm" && <Confirm />}
    </div>
  );
};

export default Status;
