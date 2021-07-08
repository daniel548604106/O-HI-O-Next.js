import React, { useState } from "react";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/actions/cartAction";
import {
  addToFavorite,
  openLoginModal,
} from "../../../redux/actions/globalAction";
import { useRouter } from "next/router";
const ProductCTA = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const { favoriteProducts } = useSelector((state) => state.global);
  const [isSaved, setSaved] = useState(
    favoriteProducts.map((product) => product._id).includes(product._id)
  );
  const addItemToCart = () => {
    if (!isUserLoggedIn) {
      return router.push("/login");
    }
    dispatch(addToCart(product));
  };

  const addToWishList = () => {
    const type = "product";
    setSaved(!isSaved);
    dispatch(addToFavorite(product._id, type));
  };

  return (
    <div className="space-y-2">
      <span onClick={() => addItemToCart()}>
        <Button
          bgColor="bg-main-pink"
          textColor="text-white"
          title="加入購物車"
          Icon={ShoppingCartIcon}
        />
      </span>

      {isSaved ? (
        <span onClick={() => addToWishList()}>
          <Button
            bgColor="bg-white"
            textColor="text-main-pink"
            borderColor="border-main-pink border"
            title="Saved"
            Icon={HeartIcon}
          />
        </span>
      ) : (
        <span className="hidden sm:block" onClick={() => addToWishList()}>
          <Button
            bgColor="bg-black"
            textColor="text-white"
            title="Add To WishList"
            Icon={HeartIcon}
          />
        </span>
      )}
    </div>
  );
};

ProductCTA.propTypes = {
  product: PropTypes.object,
};

export default ProductCTA;
