import { combineReducers } from "redux";
import location from "./location";
import animal from "./animal";
import breed from "./breed";
import theme from "./theme";


// combine reducers is helper function which combines all reducers into one place
// combineReducers is a convenience function from Redux so you don't have to write your own root reducer.

// we can create our own parent function 

// function reducer (action,state) {
//     switch(action.type)
//     {
//         case
//     }
// }

// this is one parent reducer function

// this reducer is basically doing this with multiple switch satements but we dont need to do that
// case "CHANGE_BREED":
//         return action.payload;

export default combineReducers({
    //location : location , can also be written as
    location,
    theme,
    animal,
    breed
});