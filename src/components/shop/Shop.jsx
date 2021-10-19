import { Container } from "react-bootstrap";
import { useEffect,useState } from "react";
const Shop =() => {

  useEffect(() => {
     fetechProductsApi();
  },[]);

  const [products,setProducts] =useState([]);
  const fetechProductsApi = () =>{
  return  fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProducts(json))
  }
   return (
     <Container>

      <h2>
       Shop Now
     </h2>

     </Container>

   );
 }
 export default Shop