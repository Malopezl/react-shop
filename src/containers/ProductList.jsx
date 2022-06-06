import React from "react";
import axios from "axios";
import ProductItem from "@components/ProductItem";
import "@styles/ProductList.scss";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get(API);
      setProducts(response.data);
    }
    fetchData();
  }, []);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
