import React from "react";
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
  const favoriteProducts = useSelector(
    (state) => state.global.favoriteProducts
  );
  const addItemToCart = () => {
    if (!isUserLoggedIn) {
      return dispatch(openLoginModal());
    }
    dispatch(addToCart(product));
  };

  const addToWishList = () => {
    const type = "product";
    dispatch(addToFavorite(params.id, type));
  };

  return (
    <div>
      <Button
        onClick={() => addItemToCart()}
        bgColor="bg-main-pink"
        textColor="text-white"
        title="加入購物車"
        Icon={ShoppingCartIcon}
      />

      {favoriteProducts.find(
        (favoriteProduct) => favoriteProduct._id === product._id
      ) ? (
        <Button
          bgColor="bg-main-pink"
          textColor="text-white"
          title="Saved"
          Icon={HeartIcon}
        />
      ) : (
        <span className="mt-10px hidden sm:block">
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
