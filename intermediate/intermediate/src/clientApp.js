import {render} from 'react';
import App from "./App"
import {BrowserRouter} from 'react-router-dom';
import { hydrate } from 'react-dom';


//broser router only happens in dom and not in node so we need to use browser router into our client app

// render makes app from nothing but we just need react to take the static markup we generated for you from static html
// so we use hydrate

// render( <BrowserRouter>
//         <App />
//         </BrowserRouter>, 
// document.getElementById("root")
// );

hydrate( <BrowserRouter>
    <App />
    </BrowserRouter>, 
document.getElementById("root")
);

