import React from "react";
import PropTypes from "prop-types";
import { PlusIcon, CheckIcon } from "@heroicons/react/outline";
import Stars from "../../Global/Stars/Stars.jsx";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../../redux/actions/globalAction";
// import { toggleChat } from "../../../store/chat/chatAction";
const ShopInfo = ({ product, shopInfo }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [shopFollowed, setShopFollowed] = useState(false);
  const favoriteShops = useSelector((state) => state.global.favoriteShops);
  const followShop = (id) => {
    const type = "shop";
    dispatch(addToFavorite(id, type));
  };
  const directToShop = (account) => {
    router.push(`/shops/${account}?tab=product`);
  };
  const patchChat = async (id) => {
    try {
      dispatch(toggleChat());
    } catch (error) {
      console.log("chat error");
    }
  };
  return (
    <div>
      <div className={classes.designShopRoot}>
        <h2 className={classes.title}>關於設計館</h2>
        <div className={classes.designShopLayout}>
          <img
            onClick={() => directToShop(product.publishedBy.account)}
            className={classes.designShopLogo}
            src={product && product.publishedBy.logo}
            alt="shop-logo"
          />
          <div>
            <p>{product && product.publishedBy.name}</p>
            <Stars />
          </div>
        </div>
        {favoriteShops && (
          <div className={classes.ctaBtnRow}>
            {shopFollowed ? (
              <button
                onClick={() => followShop(product.publishedBy._id)}
                className={classes.followed}
              >
                <CheckIcon />
                <p>關注中</p>
              </button>
            ) : (
              <button
                onClick={() => followShop(product.publishedBy._id)}
                className={classes.follow}
              >
                <PlusIcon />
                <p>加入關注</p>
              </button>
            )}

            <button
              onClick={() => patchChat(product.publishedBy.user)}
              className={classes.contact}
            >
              <p>聯絡店家</p>
            </button>
          </div>
        )}
        <div className={classes.productPreview}>
          {shopInfo &&
            shopInfo.products.map((product) => (
              <>
                <img
                  key={product.name}
                  src={product.images[0]}
                  alt={product.name}
                />
                <p>{product.name}</p>
              </>
            ))}
        </div>
        <hr className={classes.separator} />
        <div className={classes.shareRow}>
          <h1 className={classes.title}>Share</h1>
        </div>
      </div>
    </div>
  );
};

ShopInfo.propTypes = {
  product: PropTypes.object,
  shopInfo: PropTypes.object,
};

export default ShopInfo;
