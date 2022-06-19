import React from 'react';
// import ReactDom from 'react-dom';
// this will increae speed as we're not import whole module but just the function we require
import { render } from 'react-dom';
import Pet from "./Pet";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Form from "./Form.js";
import Details from "./Details"


const App = () => {
    return(
        // <div> 
        //     {/* <Pet name="nitish"/> */}

        //     <Form/>
        // </div>

        <BrowserRouter>
            <h1>Adopt me</h1>
            <Routes>
                <Route path='/details/:id' element={<Details/>}/>
                {/* we need to create a component which will return details with a tag with href as /details/id */}
                <Route path='/' element={<Form/>} />
            </Routes>

            {/* we use <Link> component instead of returning <a> tag  */}
        </BrowserRouter>
    );
};
// const App = () => {
//     // this function has to be fast as it has to render 
//     return React.createElement(
//         "div",
//         // {},this is id
//         {},
//         [
//             React.createElement(pet)
//         ]
//     );
// };
// const pet = ()=>{
//     return React.createElement("div",{},[
//             React.createElement("h1",{},"hi")
//         ])

// }

// after installing parcel we can now bundle our modules together so we can create another component for pet

// here it's creating instance of app and putting it in root , it renders and append it to dom of browser 
// as browser cannot render react
// this is pure react 

// render(React.createElement(App), document.getElementById("root"));

render(<App />, document.getElementById("root"));