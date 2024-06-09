// Use typescript in functional component 

import React from 'react'
interface IPROPS {
    name: String;
    title: String;
    age: number;
}
let Customer: React.FC<IPROPS> = ({ name, title, age }) => {


    return (
        <>
            <div>hello I am Ankit</div>
            <h2>Name:{name}</h2>
            <h3>Title:{title}</h3>
            <h3>Age:{age}</h3>

        </>
    )

}
export default Customer;