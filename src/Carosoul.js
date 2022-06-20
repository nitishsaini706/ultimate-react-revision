import { Component } from "react";

class Carasoul extends Component{

    constructor(props)
    {
        super(props);
        this.state = {active : }
    }

    static defaultProps=  {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
    };
}


const x = new Carasoul();

x.state.active;

export default Carasoul;