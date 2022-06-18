import React from 'react';

//jsx automatically add createelement etc things in our react and makes code more readable
const Pet = (props)=>{
        <>
                <h1> {props.name}</h1>
        </>
}

// this is javascript to mimic html
// const pet = ()=>{
//         return React.createElement("div",{},[
//                 React.createElement("h1",{},"hi"),
//                 React.createElement("h1",{},"hi")
//             ])
        
//     }
    
export default Pet;

// by default export pet , as we need it in other module