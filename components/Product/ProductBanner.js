import React, { useState } from "react";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Button from "./Button";
import { addToCart } from "../../redux/actions/cartAction";
import { addToFavorite } from "../../redux/actions/globalAction";
const ProductBanner = ({ product, scrollToPage }) => {
  const scrollButtons = [
    {
      name: "Product Description",
      scrollTo: "product-description",
    },
    {
      name: "Evaluation & Comments",
      scrollTo: "evaluation-&-comments",
    },
  ];
  const [activeBtn, setActiveBtn] = useState(0);
  const dispatch = useDispatch();
  const favoriteProducts = useSelector(
    (state) => state.global.favoriteProducts
  );
  const router = useRouter();
  const addItemToCart = (product) => {
    dispatch(addToCart(product));
  };

  const scrollEffect = (idx) => {
    setActiveBtn(idx);
    scrollToPage(idx);
  };

  const addToWishList = () => {
    const type = "product";
    dispatch(addToFavorite(params.id, type));
  };

  return (
    <div className="px-15px w-full">
      <div className="max-w-1200px mx-auto h-80px flex items-center justify-between">
        <div className="flex items-center">
          {scrollButtons.map((scrollBtn, idx) => (
            <button
              className={`mr-20px outline-none ${
                activeBtn === idx && " cursor-pointer "
              } `}
              onClick={() => scrollEffect(idx)}
              key={scrollBtn.name}
            >
              {scrollBtn.name}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          {favoriteProducts &&
          favoriteProducts.find(
            (favoriteProduct) => favoriteProduct._id === product._id
          ) ? (
            <div className="mr-20px" onClick={() => addToWishList()}>
              <Button
                Icon={HeartIcon}
                bgColor="bg-main-pink rounded text-white px-10px"
                title="已加入收藏"
              />
            </div>
          ) : (
            <div className="mr-20px" onClick={() => addToWishList()}>
              <Button
                Icon={HeartIcon}
                bgColor="border-black border rounded px-10px text-black"
                title="收藏商品"
              />
            </div>
          )}
          <Button
            bgColor="border-main-pink border rounded px-10px text-main-pink"
            Icon={ShoppingCartIcon}
            title="放入購物車"
          />
        </div>
      </div>
    </div>
  );
};

ProductBanner.propTypes = {
  product: PropTypes.object,
  scrollToPage: PropTypes.func,
};

export default ProductBanner;
