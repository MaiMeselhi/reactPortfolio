import "./Shop.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Shop = () => {
  useEffect(() => {
    fetechProductsApi();
  }, []);

  const [products, setProducts] = useState([]);
  const fetechProductsApi = () => {
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  return (
    <div class="container">
      <h2 class="py-5 text-center ">Shop Now</h2>
      <section className="d-flex flex-wrap justify-content-center">
        {products.map((product) => {
          return (
            <Link
              to={`/Shop/${product.id}`}
              key={product.id}
              key={product.id}
              className="product w-25 p-1 mb-3 me-3 text-center"
            >
              <img
                className="image w-50"
                src={product.image}
                alt="productimage"
              />
              <h3>{product.title}</h3>
              <p className="price">price:{product.price}</p>
              <p>{product.category}</p>
            </Link>
          );
        })}
      </section>
    </div>
  );
};
export default Shop;
