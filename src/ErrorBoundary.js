import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component{
    constructor(props)
    {
        super(props);
        this.state = {hasError : false};
    }

    static getDerivedStateFromError(){
        return {hasError :true};
    }

    componenetDidCatch(error,info){
        console.error(error,info);
    }

    render(){
        if(this.state.hasError){
            return (
                <h1>there was an eror , click me <Link>CLick here</Link></h1>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;