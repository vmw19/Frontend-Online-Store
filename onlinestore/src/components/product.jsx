import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState } from "react";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (val) => {
    console.log("The quantity changed!", val);
    setQuantity(val);
  };

  return (
    <div className="product">
      <img src={"/images/" + props.info.image} alt=""></img>

      <h3>{props.info.title}</h3>

      <label className="total">
        ${(props.info.price * quantity).toFixed(2)}
      </label>
      <label className="price">${props.info.price.toFixed(2)}</label>

      

      <QuantityPicker onChange ={handleQuantityChange}> </QuantityPicker>

      <button className="btn btn-sm btn-primary">Add to Cart</button>
    </div>
  );
};

export default Product;
