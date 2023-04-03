import { useContext } from "react";
import { ShopContext } from "../../Context/Shop-Context";


const Product = (props) => {
    const { productName, price, productImage, id } = props.data
    const{addToCart, cartItems}= useContext(ShopContext)

    const cartItemCout = cartItems[id]
    return (
        <div className="product">
          <img src={productImage} />
          <div className="description">
            <p>
              <b>{productName}</b>
            </p>
            <p> ${price}</p>
          </div>
          <button className="addToCartBttn" onClick={()=> addToCart(id)}>Add to Cart {cartItemCout > 0 && <>({cartItemCout})</>}</button>
        </div>
      );
    };

export default Product