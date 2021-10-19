import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from './views/counterContainer';
import Nav from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import About from "./components/About/About";
import Shop from "./components/shop/Shop";
import Counter from './components/counter/counterActions';
function App() {
return (


     <>
     <Router>
     <Nav />
      <div className="container">
          <switch>
            <Route component={Home} path="/" exact/>
            <Route component={About} path="/About"/>
            <Route component={Container} path="/Container"/>
            <Route component={Shop} path="/Shop" />
          </switch>
      </div>


     </Router>


  </>
);
}
export default App;
