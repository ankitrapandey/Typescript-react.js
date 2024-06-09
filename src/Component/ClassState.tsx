import React, { Component } from "react";
interface IState {
    name: String;
    title: String;
}
export default class ClassState extends Component<{}, IState> {
    constructor(state: IState) {
        super(state)
        this.state = {
            name: 'anku',
            title: 'typescript in classbase',

        }
    }
    render() {
        const { name, title } = this.state

        return (
            <>
                <div>
                    <h3 className='text-orange-400'>Name:{name}</h3>
                    <h3 className='text-orange-400'> Title:{title}</h3>
                </div>
            </>
        )
    }
}