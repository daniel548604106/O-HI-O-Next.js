import React from "react";
import Dropdown from "./Dropdown";
import PropTypes from "prop-types";
import Title from "./Title";
import Stars from "../../Global/Stars";
const ProductDescription = ({
  product,
  evaluationRef,
  productDescriptionRef,
  reviews,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <div ref={productDescriptionRef} className="description">
        <Dropdown title="商品介紹" product={product} />
      </div>
      <div ref={evaluationRef} style={{ width: "100%" }}>
        <Title title="商品評價" />
        <hr />
        <div className="w-full flex mt-20px justify-between items-start">
          <div>
            {reviews && reviews.length ? (
              reviews.map((review) => (
                <div key={review._id} className="flex w-full mr-10px">
                  <img src={review.user.picture} alt="avatar" />
                  <div className="w-full">
                    <div className="flex justify-between">
                      <p className="text-gray-700 w-200px">
                        <span className="cursor-pointer text-main-pink hover:underline">
                          {review.user.name}
                        </span>{" "}
                        在一週前所留下的評價
                      </p>
                      <div className="w-full max-w-100px">
                        <Stars score={review.score} />
                      </div>
                    </div>
                    <p>{review.comment.text}</p>
                    {review.comment.images.map((image) => (
                      <img
                        className="w-full h-auto mt-20px"
                        key={image}
                        src={image}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className=" w-full h-100px flex justify-center items-center">
                目前尚無任何評價
              </div>
            )}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

ProductDescription.propTypes = {
  product: PropTypes.object,
  evaluationRef: PropTypes.func,
  productDescriptionRef: PropTypes.func,
  reviews: PropTypes.array,
};

export default ProductDescription;
