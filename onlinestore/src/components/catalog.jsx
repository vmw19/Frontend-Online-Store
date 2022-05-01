import "./catalog.css";
import Product from "./product";
import { useState, useEffect } from "react";
import DataService from "../services/dataService";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  const loadCatalog = () => {
    const service = new DataService();
    let prods = service.getCatalog();
    setProducts(prods);

    console.log(prods);
  };

  useEffect(() => {
    //do something when the components are displayed
    loadCatalog();
  }, []);

  return (
    <div className="catalog">
      <h1>This is our amazing catalog!! </h1>
      <h4>We have {products.length} amazing pairs of shoes for you!</h4>

      {products.map((prod) => (
        <Product key={"prod._id"} info={prod}>
          {" "}
        </Product>
      ))}
    </div>
  );
};

export default Catalog;
