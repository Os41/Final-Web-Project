const express = require("express");
const app = express();

app.use("/", express.static("./website"));

app.use(express.urlencoded({extended:false}));
const formPostLink = "/process";

app.post(formPostLink, (request, response) => {
    const fname = request.body.fname;
    const email = request.body.email;
    const countrycode = request.body.countrycode;
    const mobile = request.body.mobile;
    const aboutus = request.body.aboutus;

    const msg = `<h1>User Data Recieved:</h1> 
                <p>fname=${fname}</p> 
                <p>email=${email}</p> 
                <p>countrycode=${countrycode}</p> 
                <p>mobile=${mobile}</p> 
                <p>aboutus=${aboutus}</p>`;

    response.send(msg);
});

app.listen(4000, () => {
    console.log("Server is listening on provided port");
});