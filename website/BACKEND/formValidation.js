const { check, body } = require("express-validator");

function getContactUsFormValidation() {
    return[
        check('fname').isLength({min:1, max:100}).withMessage('First name must be between 1 and 100 chars in length')
        .isString().withMessage('First name must be of type string')
        .trim().escape(),

        check('lname').isLength({min:1, max:100}).withMessage('Last name must be between 1 and 100 chars in length')
        .isString().withMessage('Last name must be of type string')
        .trim().escape(),

        check('email').isLength({min:2, max:200}).withMessage('Email must be between 2 and 200 chars in length')
        .isString().withMessage('Email must be of type string')
        .isEmail().withMessage('Email must be in the correct email fromat e.g., x@y.com')
        .trim().escape(),

        check('mobile').isLength({min:9, max:14}).withMessage('Mobile must be between 9 and 14 digits')
        .isNumeric().withMessage('Mobile must consist of numbers only')
        .trim().escape(),

        check('gender').custom(val => {
            const gender = ['Male', 'Female'];
            if(gender.includes(val)) return true
            return false
        }).withMessage("Selection for 'Your Gender' must be from provided list")
        .trim().escape(),

        check('dateOfBirth').isLength({min:10, max:10}).withMessage('Date of birth must be 10 chars in length')
        .isString().withMessage('Date of birth must be of type string')
        .isDate().withMessage('Date of birth must consist of date only')
        .trim().escape(),

        check('languageOfCommunication').custom(val => {
            const languageOfCommunication = ['Arabic', 'English', 'French'];
            if(languageOfCommunication.includes(val)) return true
            return false
        }).withMessage("Selection for 'Your Gender' must be from provided list")
        .trim().escape(),

        check('message').isLength({min:1, max:500}).withMessage('Message must be between 1 and 500 chars in length')
        .isString().withMessage('Message must be of type string')
        .trim().escape(),
    ]
}

function getRegisterFormValidation() {
    return[
        check('email').isLength({min:2, max:200}).withMessage('Email must be between 2 and 200 chars in length')
        .isString().withMessage('Email must be of type string')
        .isEmail().withMessage('Email must be in the correct email fromat e.g., x@y.com')
        .trim().escape(),

        check('password').isLength({min:8, max:100}).withMessage('Email must be between 2 and 200 chars in length')
        .trim().escape(),
    ]
}

function printErrors(errArray){
    let errors = [];
    for (let index = 0; index < errArray.length; index++) {
        let err = errArray[index]["msg"];
        let msg = `<p>${err}</p>`;
        errors.push(msg);
    }
    return errors.join("");
}

module.exports = {getContactUsFormValidation, printErrors, getRegisterFormValidation};