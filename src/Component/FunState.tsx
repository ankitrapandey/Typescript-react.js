import React from 'react'
import { useState } from 'react'
interface IState{
    name:String;
    age:number;
    email:String
}
let FunState:React.FC=()=>{
    const[state,Setstate]=useState<IState>({
        name:"ankit",
        age:20,
        email:"ankit@gmail.com"

    });
  return (
    <div>
      <h2 className='text-orange-400'> Name: {state.name}</h2>
      <h2 className='text-green-500'> Age: {state.age}</h2>
      <h2 className='text-pink-500'>Email: {state.email}</h2>


    </div>
  )
}

export default FunState
