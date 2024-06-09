import { Component, } from "react";

interface IPROPS {
    userid: number
    name: String;
    email: String;
    title: String
}
export default class User extends Component<IPROPS> {
    constructor(props: IPROPS) {
        super(props)
    }
    render() {
        const { userid, name, email, title } = this.props
        return (
            <>
                <div>welcome to class based component </div>
                {/* {first ways to access} */}
                
                {/* <h3>User id: {this.props.userid}</h3>     
                <h3> Name: {this.props.name}</h3>
                <h3>Email: {this.props.email}</h3>
                <h3>Title: {this.props.title}</h3> */}


                {/* {second ways to access} */}

                <h3>User id: {userid}</h3>
                <h3> Name: {name}</h3>
                <h3>Email: {email}</h3>
                <h3>Title: {title}</h3>

            </>
        )
    }
}