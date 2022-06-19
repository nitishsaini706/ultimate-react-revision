import React , {useState} from 'react';

// everytime we type in the input box it will render this component again 
// and thus it's value will again become pathankot not matter what
// this is where hooks come into play

const Form = ()=> {
    // const location  = "pathankot,IN"
    
    const{location ,setLocation} = useState(""); 
    return (
        <div className='search'>
            <form>
                <label htmlFor='location'>
                    Location
                    <input id='location' value={location} placeholder="location " onChange={(e) => setLocation(e.target.value)}/>
                </label>
                <button>SUbmit</button>
            </form>
        </div>
    );
}

export default Form;