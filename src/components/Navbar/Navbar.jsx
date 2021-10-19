import "./Navbar.css"
import { Link } from "react-router-dom";

const Nav = () => {
   return (

     <nav className="nav d-flex justify-content-around align-items-center">
       <h3 class="logo">Brand</h3>
       <ul className="d-flex justify-content-around align-items-center w-50">
       <Link to="/Shop"> <li className="list-item">Home</li></Link>

       <Link to="/About"> <li className="list-item">About</li></Link>
       <Link to="/Shop"> <li className="list-item">Shop</li></Link>

       <Link to="/Container"> <li className="list-item py-3">Counter</li></Link>

       </ul>
     </nav>
   );
 };


   export default Nav;