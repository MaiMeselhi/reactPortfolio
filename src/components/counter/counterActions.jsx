import "./counterActions.css";
const Counter = ({count,increment,decrement}) => {

   return (
       <div className="container text-center py-5">
           <h4 className="count">count:{count}</h4>
           <ul>
               <button onClick={increment} className="increment my-5 ">increment</button>
               <button onClick={decrement} className="decrement my-5">decrement</button>
           </ul>
       </div>
   );
}

export default  Counter;
