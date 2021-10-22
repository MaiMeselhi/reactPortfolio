import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from './views/counter/counterContainer';
import Nav from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import About from "./components/About/About";
import Shop from "./components/shop/Shop"
import Products from "./components/Products/Products"
import Counter from './components/counter/counterActions';
import Todo from './views/todo/Todo';

function App() {
return (


     <>
     <Router>
     <Nav />
      <div className="container">
          <Switch>
            <Route component={Home} path="/" exact/>
            <Route component={About} path="/About"/>
            <Route component={Todo}  path="/Todo"/>
            <Route component={Container} path="/Container"/>
            <Route component={Shop} path="/Shop" exact />
            <Route component={Products} path="/Shop/:id" />
          </Switch>
      </div>


     </Router>


  </>
);
}
export default App;
