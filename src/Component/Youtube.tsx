import React, { useState } from 'react'
interface IState{
    massege:String
}
const Youtube:React.FC = () => {
    const [state,Setstate]=useState<IState>({massege:'Welcome'})
    const handleGreet=(Greet:String):void=>{
        Setstate({massege:Greet})

    }
  return (
    <div>
      <h3>{state.massege}</h3>
      <button onClick={()=>handleGreet('Like')} className='h-[7vh] w-[10vw] rounded-md bg-orange-300 text-red-600 text-xl'>Like</button>
      <button onClick={()=>handleGreet('comment')}  className='h-[7vh] w-[10vw] ml-5 rounded-md bg-orange-300 text-red-600 text-xl'>comment</button>
      <button onClick={()=>handleGreet('subscribe')} className='h-[7vh] w-[10vw] ml-5 rounded-md bg-orange-300 text-red-600 text-xl'>Subscribe</button>
    </div>
  )
}

export default Youtube
