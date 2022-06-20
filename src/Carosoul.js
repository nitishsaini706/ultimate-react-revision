import { Component } from "react";

class Carasoul extends Component{

    constructor(props)
    {
        super(props);
        this.state = {active :0 }
    }

    static defaultProps=  {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
    };

    render() {
        const {active} = this.state;
        const {images} = this.props;

        return ( 
            <div className="carosoul">
                <img src={images[active]} alt="aimal"/>
                <div className="carusoul-smaller">
                    {images.map((photo,index) => {
                        <img 
                            key={photo}
                            src={photo}
                            className={index === active ? "active" : ""}
                        />
                    })}
                </div>
            </div>
        )
    }
}


// const x = new Carasoul();

// x.state.active;

export default Carasoul;