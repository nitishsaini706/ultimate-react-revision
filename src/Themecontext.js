import { createContext } from "react";

// this is class based

//const [theme,setTheme] = useState('dark);

// we are mimicking use state for types , code will work find with createContext();
const ThemeContext = createContext(["black" , ()=> {}]);

export default ThemeContext.js


// component based 

// import { useContext } from "react";

// const[theme]=  useContext(ThemeContext)


// <button style={{backgroundColor : theme}}> Submit</button>