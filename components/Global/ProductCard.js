import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { addToFavorite } from "../../redux/actions/globalAction";
import { HeartIcon } from "@heroicons/react/outline";
import { discount } from "../../lib/tool";
import Image from "next/image";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [addedFavorite, setAddedFavorite] = useState(-1);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const favoriteProducts = useSelector(
    (state) => state.global.favoriteProducts
  );
  const directToProduct = () => {
    console.log("push");
    router.push(`/products/${product._id}`);
  };
  const addItemToFavorite = (e, id) => {
    e.stopPropagation();
    if (isUserLoggedIn) {
      const type = "product";
      dispatch(addToFavorite(id, type));
      return;
    }
    router.push("/login");
  };

  useEffect(() => {
    if (!favoriteProducts) return;
    const searchFavorite = () => {
      const productIds = favoriteProducts.map((item) => {
        return item._id;
      });
      // setAddedFavorite(productIds.indexOf(product._id));
    };
    searchFavorite();
  }, [favoriteProducts]);

  return (
    <div
      onClick={() => directToProduct()}
      className="relative cursor-pointer w-full"
    >
      <div className="absolute top-0 flex items-center left-0 z-10 text-white uppercase">
        <p className="bg-light-blue px-10px py-5px text-sm">新品</p>
        {product.discountPrice && (
          <p className="bg-main-pink px-10px py-5px text-sm">
            {discount(product)}
          </p>
        )}
      </div>
      {product ? (
        <div
          className=" relative hover:opacity-70"
          onClick={() => directToProduct(product._id)}
        >
          <div className="relative">
            <Image
              className="min-h-150px w-150px sm:min-w-200px sm:min-h-200px"
              width={200}
              height={200}
              src={product.images[0]}
              alt={product.name}
            />
            <HeartIcon
              onClick={(e) => addItemToFavorite(e, product._id)}
              className={`text-white h-5 sm:h-7 absolute bottom-10px cursor-pointer right-10px hover:text-gray-700 ${
                addedFavorite > -1 && "bg-main-pink"
              }`}
            />
          </div>
          <div className="p-10px h-100px flex  flex-col justify-between">
            <h2 className="text-sm md:text-md line-clamp-2 overflow-hidden font-semibold ">
              {product.name}
            </h2>
            <div>
              <h2 className="text-sm sm:text-md text-gray-600">
                {product.publishedBy.name}
              </h2>
              <div className="flex items-end">
                <span className="text-main-pink mr-5px text-md ">NTD</span>
                {product.discountPrice && (
                  <p className="text-main-pink mr-5px text-md">
                    ${product.discountPrice}
                  </p>
                )}
                <p
                  className={`
                    mr-5px text-sm text-gray-600
                    ${!product.discountPrice && "text-md text-main-pink"}
                    ${product.discountPrice ? "line-through" : ""}
                  `}
                >
                  ${product.fullPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Loading />
        </>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
