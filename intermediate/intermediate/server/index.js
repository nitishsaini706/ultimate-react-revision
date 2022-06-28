const express = require('express');
//render string from react dom
import {renderToString} from 'react-dom/server'
import { renderToNodeStream } from "react-dom/server";

//mimic server in react
import { StaticRouter} from 'react-router-dom/server'
import fs from 'fs';
import App from "../src/App";

const PORT = process.env.PORT || 3000;

// we'll use generated static html from index.html 


// this is generated index which has all the correct links
const html = fs.readFileSync("dist/frontend/index.html").toString();


// we are spliting html from not rendered
const parts = html.split("not rendered");

const app = express();

app.use("/frontend" ,express.static("dist/frontend"));

// app.use((req,res) => {

//     // we do this so that our style sheets are rendered by browser first and markup is loaded after wards
//     // this is a perfomance enhancement
//     res.write(parts[0]);

//     // this is going through parcel so we can send jsx
//     const reactMarkup= (
//         <StaticRouter location={req.url}>
//             <App/>
//         </StaticRouter>
// )

// we do in streams as we send responses in chunks. This is called streaming your request
// this allows browser to load stuff css and will not block broowser from rendering stuff
app.use((req, res) => {
    res.write(parts[0]);
    const reactMarkup = (
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );
  
    const stream = renderToNodeStream(reactMarkup);
    stream.pipe(res, { end: false });
    stream.on("end", () => {
      res.write(parts[1]);
      res.end();
    });
  });

// now we are sending response as part 0 + rendered part from react + part 2 
// res.send(parts[0]+renderToString(reactMarkup) + parts[1]);
// res.end();

console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);