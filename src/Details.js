import { useParams } from "react-router-dom";
import { Component } from "react";

// const Details = () =>{
    // it's extracting id from parameters , just like in express
    // const {id} = useParams();
// return <h2>{id}</h2>
// };

// example of class component 

class Details extends Component {

    constructor(props)
    {
        super(props);
        this.state = {loading : true}
    }

    render()
    {
        if(this.state.loading)
        {
            return <h1>Loading ..</h1>
        }

        // destructuring else we've to wriite this.state.name

        const {animal,breed,name} = this.state;

        return (
            <div>
                <h1>{name}</h1>
                <h2>{animal} - {breed}</h2>
            </div>
        )
    }
}

export default Details;