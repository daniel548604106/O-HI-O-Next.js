import React, { useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../Global/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  openLoginModal,
} from "../../redux/actions/globalAction";
import { HeartIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
const ProductDisplay = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [activeImage, setActiveImage] = useState(0);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const favoriteProducts = useSelector(
    (state) => state.global.favoriteProducts
  );

  const addToWishList = () => {
    const type = "product";
    isUserLoggedIn
      ? dispatch(addToFavorite(router.query.id, type))
      : dispatch(openLoginModal());
  };
  return product ? (
    <div className="relative">
      <div>
        <div
          className="relative w-screen sm:w-full"
          style={{ backgroundImage: `url(${product.images[activeImage]})` }}
        ></div>
        <div className="flex justify-center mt-10px overflow-scroll">
          {product.images.map((image, idx) => (
            <img
              key={image}
              className={activeImage === idx && classes.active}
              src={image}
              onClick={() => setActiveImage(idx)}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="sm:hidden block">
        <Swiper
          id="swiper-banner"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop
          pagination={{ clickable: true }}
        >
          {product.images.map((image) => (
            <SwiperSlide key={image}>
              <div
                className="w-full pt-80% bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  cursor: "pointer",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <HeartIcon
        onClick={() => addToWishList()}
        className={classes.icon}
        style={{
          fill:
            favoriteProducts.find(
              (favoriteProduct) => favoriteProduct._id === product._id
            ) && "#eb7f82",
        }}
      />
    </div>
  ) : (
    <Loader />
  );
};

ProductDisplay.propTypes = {
  product: PropTypes.object,
};
export default ProductDisplay;
