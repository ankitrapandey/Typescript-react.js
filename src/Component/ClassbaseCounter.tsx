
import { Component } from 'react'

interface counterState {
    count: number
}
export default class ClassbaseCounter extends Component<{}, counterState> {
    constructor(state: counterState) {
        super(state)
        this.state = {
            count: 0
        }
    };


    increment = () => {
        this.setState((e) => ({
            count: e.count + 1,
            
        }))
    }

    // print console 

    // increment = () => {
    //     this.setState((e) => {
    //         console.log('increment');
    //         return {
    //             count: e.count + 1,
    //         };
    //     });
    // };
    
    decrement = () => {
        this.setState((e) => ({
            count: e.count - 1
            
        }))
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h1>counter</h1>
                <h3>{count}</h3>
                {/* <h3>{count}</h3> */}
                <button className="h-[7vh] rounded-md w-[10vw] bg-teal-500 text-yellow-200 text-xl" onClick={this.increment}>Increment</button>
                <button className="h-[7vh] ml-4 rounded-md w-[10vw] bg-teal-500 text-yellow-200 text-xl" onClick={this.decrement}>decrement</button>


            </div>
        )
    }

}