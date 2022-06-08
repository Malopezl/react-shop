import React from "react";
import "@styles/ProductItem.scss";
import { AppContext } from "@context/AppContext";
import addToCartImage from "@icons/bt_add_to_cart.svg";
import addedToCartImage from "@icons/bt_added_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart } = React.useContext(AppContext);
  const [added, setAdded] = React.useState(false);

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure
          className="more-clickable-area"
          onClick={() => {
            added ? removeFromCart(product) : addToCart(product);
            setAdded(!added);
          }}
        >
          {added ? (
            <img src={addedToCartImage} alt="" />
          ) : (
            <img src={addToCartImage} alt="" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
