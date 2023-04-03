import { useContext } from "react";
import { ShopContext } from "../../Context/Shop-Context";
import { PRODUCTS } from "../../products";
import "./cart.css";
import CartItem from "./CartItem";


const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

    </div>
  );
};
export default Cart