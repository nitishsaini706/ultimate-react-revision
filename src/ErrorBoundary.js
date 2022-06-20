import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component{
    constructor(props)
    {
        super(props);
        this.state = {hasError : false ,redirect:false};
    }

    static getDerivedStateFromError(){
        return {hasError :true};
    }

    componenetDidCatch(error,info){
        console.error(error,info);
    }

    componentDidUpdate()
    {
        if(this.state.hasError)
        {
            setTimeout(() => this.setState({redirect:true}),4000);
        }
    }
    render(){
        if(this.state.redirect)
        {
            return <Navigate to="/" />
        }
        else if(this.state.hasError){
            return (
                <h1>there was an eror , click me <Link>CLick here</Link></h1>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;