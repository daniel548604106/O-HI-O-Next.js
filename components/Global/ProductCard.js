import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { addToFavorite } from "../../redux/actions/globalAction";
import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/solid";
import { discount } from "../../lib/tool";
import Image from "next/image";
const ProductCard = ({ product, favoriteProductIds }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isUserLoggedIn } = useSelector((state) => state.user);
  const { favoriteProducts } = useSelector((state) => state.global);

  const [saved, setSaved] = useState(
    favoriteProducts.map((product) => product._id).includes(product._id)
  );

  const directToProduct = () => {
    router.push(`/products/${product._id}`);
  };
  const toggleHeartIcon = (e, id) => {
    e.stopPropagation();
    if (isUserLoggedIn) {
      setSaved(!saved);
      const type = "product";
      dispatch(addToFavorite(id, type));
      return;
    } else {
      router.push("/login");
    }
  };
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
        <div className=" relative hover:opacity-70">
          <div className="relative">
            <Image
              className=""
              width={400}
              height={400}
              layout="responsive"
              src={product.images[0]}
              alt={product.name}
            />
            {saved ? (
              <HeartSolidIcon
                onClick={(e) => toggleHeartIcon(e, product._id)}
                className={` text-main-pink h-5 sm:h-7 absolute bottom-10px cursor-pointer right-10px hover:text-gray-700 `}
              />
            ) : (
              <HeartIcon
                onClick={(e) => toggleHeartIcon(e, product._id)}
                className={`text-white h-5 sm:h-7 absolute bottom-10px cursor-pointer right-10px hover:text-gray-700 `}
              />
            )}
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
                    ${product.discountPrice ? "line-through ml-1" : ""}
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
  favoriteProductIds: PropTypes.array,
};

export default ProductCard;
