import { useParams } from "react-router-dom";

const Details = () =>{
    // it's extracting id from parameters , just like in express
    const {id} = useParams();
return <h2>{id}</h2>
};

export default Details;