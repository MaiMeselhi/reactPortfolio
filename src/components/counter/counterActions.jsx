import "./counterActions.css";
const Counter = ({count,increment,decrement}) => {

   return (
       <div className="container">
           <h4 className="count">count:{count}</h4>
           <ul>
               <button onClick={increment} className="increment">increment</button>
               <button onClick={decrement} className="decrement">decrement</button>
           </ul>
       </div>
   );
}

export default  Counter;
