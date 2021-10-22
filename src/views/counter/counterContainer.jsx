import { useState } from "react";
import Counter from '../../components/counter/counterActions';

function Container() {

   //states
   const[count,setcount]=useState(0);
   //functions
   const increment =()=>{
   setcount(count+1)
   };
   const decrement =()=>{
     if (count>1) setcount(count-1)
   };

   return (
     <div>
     <Counter count={count} increment={increment} decrement={decrement} />
     </div>
   );
   }
export default Container;
