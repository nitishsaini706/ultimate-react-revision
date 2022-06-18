const pet = ()=>{
    return React.createElement("div",{},[
            React.createElement("h1",{},"hi")
        ])
    
}

const App = () => {
    // this function has to be fast as it has to render 
    return React.createElement(
        "div",
        // {},this is id
        {},
        [
            React.createElement(pet);
        ]
    );
};

// here it's creating instance of app and putting it in root , it renders and append it to dom of browser 
// as browser cannot render react
// this is pure react 
ReactDom.renders(React.createElement(App), document.getElementById("root"));