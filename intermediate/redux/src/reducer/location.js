//old state =  seattle 
// action : {type: "Change_Location" , Payload:"Washington"}

// new sate = "washington"

export default function location(state = "Seattle, WA", action) {
    switch (action.type) {
      case "CHANGE_LOCATION":
        return action.payload;
      default:
        return state;
    }
  }

// this reducer will be called at every action that's why default return is state 
// it needs to have a state and action 