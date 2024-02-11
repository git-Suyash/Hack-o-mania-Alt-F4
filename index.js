import express from "express";
import bodyParser from "body-parser";
import dbSetup  from './database.js';
import generateUserId from "./registerUser.js";

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

 // Connect to the database before anything else
app.get("/", (req, res) => {    //homepage , landing
    res.sendFile(process.cwd() + "/public/index.html");
});

app.get("/log-in", (req, res) => {
    res.sendFile(process.cwd() + "/public/login.html");
});

app.post("/login",(req,res)=>{    // check from db and validate
    console.log(req.body);
    // add functionality here
    //app.use(dbSetup);
    res.sendFile(process.cwd()+"/public/dashboard.html");
});

app.post("/register", (req,res) => { 
    app.use(bodyParser.urlencoded({ extended: true }));
    console.log(req.body);
    app.use(generateUserId);   // middleware to create user id
    res.redirect('/log-in');
    console.log("registered");
});

app.post("/upload", (req,res) => {   // update to db
    console.log("file upload");
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}/`));