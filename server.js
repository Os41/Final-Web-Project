const express = require("express");
const app = express();

app.use("/", express.static("./website"));

const valid = require("./website/BACKEND/formValidation");
const db = require("./website/BACKEND/database");

const {check, validationResult} = require('express-validator');
const contactUsValidation = valid.getContactUsFormValidation();
const registerValidation = valid.getRegisterFormValidation();

app.use(express.urlencoded({extended:false}));
const contactUsFormPostLink = "/contact-us";
const registerFormPostLink = "/register";

app.post(contactUsFormPostLink, contactUsValidation, (request, response) => {

    const errors = validationResult(request);

    if(!errors.isEmpty()){
        let msg = `<h1>Sorry, we found errors with your submission.</h1>${valid.printErrors(errors.array())}`;

        response.send(msg);
    }else {
        const fname = request.body.fname;
        const lname = request.body.lname;
        const email = request.body.email;
        const mobile = request.body.mobile;
        const gender = request.body.gender;
        const dateOfBirth = request.body.dateOfBirth;
        const languageOfCommunication = request.body.languageOfCommunication;
        const message = request.body.message;
    
        db.addMessage(fname, lname, email, mobile, gender, dateOfBirth, languageOfCommunication, message);

        const msg = `<h1>Thank you, your message has been saved. <a href='./'>Click Here</a> to go back to our website.</h1>`;
    
        response.send(msg);
    }
});

app.post(registerFormPostLink, registerValidation, (request, response) => {

    const errors = validationResult(request);

    if(!errors.isEmpty()){
        let msg = `<h1>Sorry, we found errors with your submission.</h1>${valid.printErrors(errors.array())}`;

        response.send(msg);
    }else if(request.body.password !== request.body.passwordConirm) {
        let msg = `<h1>Sorry, your password not matched your confirm password<a href="./HTML/Register.html">Go back</a></h1>`;

        response.send(msg);
    }else {
        const email = request.body.email;
        const password = request.body.password;
    
        db.addUser(email, password);

        const msg = `<h1>Thank you, your infomation has been saved. <a href='./'>Click Here</a> to go back to our website.</h1>`;
    
        response.send(msg);
    }
});

app.listen(4000, () => {
    console.log("Server is listening on provided port");
});