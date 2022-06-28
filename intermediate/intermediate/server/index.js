import express from express;
//render string from react dom
import {renderToString} from 'react-dom/server'

//mimic server in react
import { StaticRouter} from 'react-router-dom/server'
import fs from 'fs';
import App from "../src/App";

const PORT = process.env.PORT || 3000;



