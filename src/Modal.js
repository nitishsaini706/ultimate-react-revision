import {useEffect , useRef} from 'react';
import {createPortal} from "react-dom";

const Modal = ({children}) => {

    //ref is reference which i can use in different rendering ,exaclty same thing 
    // only has one elemmet current 
    const elementRef = useRef(null);

    // gives us back container to set around all renders 
    if(!elementRef.current)
    {

        // this will be rendered inside portal and destroy the one i created in this portal 
        // otherwise it will not destroy and ultimately will cause memory leak 
        // if we create like a lot of ref 
        elementRef.current = document.createElement("div");
    }

    useEffect(()=>{
        const modal = document.getElementsById("modal");
        modal.appendChild(elementRef.current);


        // this is cleanup
        return () => modal.removeChild(elementRef.current);
    },[])
}