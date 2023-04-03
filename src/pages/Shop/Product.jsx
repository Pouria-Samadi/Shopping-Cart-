

const Product = (props) => {
    const { productName, price, productImage } = props.data
    return (
        <div className="product">
          <img src={productImage} />
          <div className="description">
            <p>
              <b>{productName}</b>
            </p>
            <p> ${price}</p>
          </div>
          <button>Add to Cart</button>
        </div>
      );
    };

export default Product