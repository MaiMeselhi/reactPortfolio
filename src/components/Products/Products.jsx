import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Products = ({ match }) => {
  useEffect(() => {
    fetechProductsApi();
  }, []);

  const [product, setProduct] = useState({});
  const fetechProductsApi = () => {
    return fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  return (
    <div className="d-flex flex-wrap  justify-content-center">
       {
          product && Object.keys(product).length >0
          ?

            <div className="product text-center p-1 mb-2 border me-2">
              <img className="image w-25" src={product.image} alt="productimage" />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <p>{product.category}</p>
            </div>
            :
            <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
       }

    </div>
  );
};
export default Products;
