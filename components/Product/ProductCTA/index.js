import React from "react";
import { HeartIcon, ChevronRightIcon } from "@heroicons/react/outline";
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
      <div onClick={() => addItemToCart()}>加入購物車</div>
      <div
        onClick={() => addToWishList()}
        className={`sm:block hidden ${
          favoriteProducts.find(
            (favoriteProduct) => favoriteProduct._id === product._id
          )
            ? "text-gray-500"
            : ""
        }`}
      >
        {favoriteProducts.find(
          (favoriteProduct) => favoriteProduct._id === product._id
        ) ? (
          <div>Saved</div>
        ) : (
          <>
            <div>
              <Button title="Add To WishList" Icon={HeartIcon} />

              <ChevronRightIcon />
            </div>
            <p>Save for future shopping</p>
          </>
        )}
      </div>
      }
    </div>
  );
};

ProductCTA.propTypes = {
  product: PropTypes.object,
};

export default ProductCTA;
