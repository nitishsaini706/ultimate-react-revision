import React from 'react';
// import ReactDom from 'react-dom';
// this will increae speed as we're not import whole module but just the function we require
import { render } from 'react-dom';
import Pet from "./Pet";
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Form from "./Form.js";
import Details from "./Details"
import Themecontext from './Themecontext';


const App = () => {

    const theme = useState('black');
    return(
        // <div> 
        //     {/* <Pet name="nitish"/> */}

        //     <Form/>
        // </div>
        <Themecontext.Provider value={theme}>
            {/* // we can add as many theme for different components just need to create new theme2 with themer i want */}
            <BrowserRouter>
            {/* example of Link */}
                <Link to="/">Adopt me</Link>
                <Routes>
                    <Route path='/details/:id' element={<Details/>}/>
                    {/* we need to create a component which will return details with a tag with href as /details/id */}
                    <Route path='/' element={<Form/>} />
                </Routes>

                {/* we use <Link> component instead of returning <a> tag  */}
            </BrowserRouter>
        </Themecontext.Provider>
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