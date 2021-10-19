import "./Shop.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <>
      <div className="header d-flex flex-wrap  justify-content-center">
        <h2>Shop Now</h2>
      </div>

      <div className="d-flex flex-wrap  justify-content-center">
        {products.map((product) => {
          return (
            <Link to={`/Shop/${product.id}`} key={product.id}>
              <div className="product text-center p-1 mb-2 border me-2">
                <img
                  className="image w-25"
                  src={product.image}
                  alt="productimage"
                />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Shop;
