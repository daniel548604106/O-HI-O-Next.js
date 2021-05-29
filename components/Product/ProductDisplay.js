import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../Global/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  openLoginModal,
} from "../../redux/actions/globalAction";
import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
const ProductDisplay = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const favoriteProducts = useSelector(
    (state) => state.global.favoriteProducts
  );
  useEffect(() => {
    let favoriteIds = favoriteProducts.map((product) => {
      return product._id;
    });

    if (favoriteIds.includes(product._id)) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [favoriteProducts]);

  const addToWishList = () => {
    const type = "product";
    isUserLoggedIn
      ? dispatch(addToFavorite(router.query.id, type))
      : dispatch(openLoginModal());
  };
  return product ? (
    <div>
      <div className="relative w-screen sm:w-full">
        <div
          className="hidden sm:block pt-80% w-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${product.images[activeImage]})` }}
        ></div>
        {/* <div className="absolute bottom-0 flex justify-center mt-10px overflow-scroll">
          {product.images.map((image, idx) => (
            <img
              key={image}
              className={activeImage === idx && "border-light-blue border-2"}
              src={image}
              onClick={() => setActiveImage(idx)}
              alt=""
            />
          ))}
        </div> */}
      </div>
      <div className="sm:hidden block relative">
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
                style={{ backgroundImage: `url(${image})`, cursor: "pointer" }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
        <HeartIcon
          className="h-8 absolute right-5 bottom-5 z-20 cursor-pointer text-white "
          style={{
            fill:
              favoriteProducts.find(
                (favoriteProduct) => favoriteProduct._id === product._id
              ) && "#eb7f82",
          }}
        />
        {saved && (
          <HeartSolidIcon
            onClick={() => addToWishList()}
            className="h-8 absolute right-5 bottom-5 z-20 cursor-pointer text-main-pink "
            style={{
              fill:
                favoriteProducts.find(
                  (favoriteProduct) => favoriteProduct._id === product._id
                ) && "#eb7f82",
            }}
          />
        )}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

ProductDisplay.propTypes = {
  product: PropTypes.object,
};
export default ProductDisplay;
