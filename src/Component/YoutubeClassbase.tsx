import React, { Component } from 'react'
interface IState{
    massege:String;
}


export default class YoutubeClassbase extends Component<{},IState> {
    constructor(state:IState){
        super(state)
        this.state={
            massege:'welcome',
        }
    }

    handleGreet=(Greet:String):void=>{
        this.setState({massege:Greet})
    }
  render() {

    const {massege}=this.state
    return (
        <div>
        <h3>{massege}</h3>
        <button onClick={()=>this.handleGreet('Like')} className='h-[7vh] w-[10vw] rounded-md bg-orange-300 text-red-600 text-xl'>Like</button>
        <button onClick={()=>this.handleGreet('comment')}  className='h-[7vh] w-[10vw] ml-5 rounded-md bg-orange-300 text-red-600 text-xl'>comment</button>
        <button onClick={()=>this.handleGreet('subscribe')} className='h-[7vh] w-[10vw] ml-5 rounded-md bg-orange-300 text-red-600 text-xl'>Subscribe</button>
  
      </div>
    )
  }
}
