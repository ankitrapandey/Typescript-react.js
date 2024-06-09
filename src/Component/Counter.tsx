import { count } from "console";
import React, { useState } from "react"
interface IState{
count:number;
}
interface IPROPS{

}
 const Counter:React.FC=()=>{
    const [state,Setstate]=useState<IState>({count:10})
    const incrememt=()=>{
        Setstate({count:state.count+1})
        console.log('increment');
    }
    const decrememt=()=>{
        Setstate({count:state.count-1})
        console.log('decrement');
    }
return(
    <>
    <div className="row">
        <div className="col-md-4">
            <h1>Counter</h1>
            <h2>{state.count}</h2>
            <button onClick={()=>incrememt()} className="h-[7vh] rounded-md w-[9vw] bg-teal-500 text-yellow-200 text-xl">Increment</button>
            <button  onClick={()=>decrememt()} className="h-[7vh] rounded-md ml-3 w-[9vw] bg-teal-500 text-yellow-200 text-xl">Decrement</button>
        </div>
    </div>
    </>
)
}
export default Counter ;