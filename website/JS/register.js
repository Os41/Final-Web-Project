document.getElementById('button_id_signUp').addEventListener("click", showPerson);
document.getElementById('myRegisterForm').addEventListener("submit", (e)=> submitValid(e));

function showPerson(){
    let forgetSection = document.getElementById('forgetPart');
    let button1 = document.getElementById('button_id_signUp');
    let button2 = document.getElementById('button_id');
    let text = document.getElementById('impText');
    let registerPage = document.getElementById('register_page');
    let conPassInput = document.getElementById('con_pass_input');
    let myRegisterForm = document.getElementById('myRegisterForm');
    

    forgetSection.hidden = !forgetSection.hidden;
    registerPage.hidden = !registerPage.hidden;

    if(button1.value == 'Login'){
        button1.value = 'Sign up now';
        button2.value = 'Login';
        text.innerText = 'Enter your information to Login';
        conPassInput.removeAttribute("required");
        myRegisterForm.removeAttribute("action");
        myRegisterForm.removeAttribute("method");
    }else{
        button1.value = 'Login';
        button2.value = 'Sign up now';
        text.innerText = 'Enter your information to register';
        conPassInput.setAttribute("required", "");
        myRegisterForm.setAttribute("action", "/register");
        myRegisterForm.setAttribute("method", "POST");
    }
}

function submitValid(e){
    let button1 = document.getElementById('button_id');
    let errMessage = document.getElementById('err');

    let email_input = document.getElementById('email_input');
    let pass_input = document.getElementById('pass_input');
    let con_pass_input = document.getElementById('con_pass_input');


    
    if(button1.value == 'Sign up now'){
        let msg = [];

        if(email_input.value == ""){
            msg.push('Email should not be emputy');
        }else{
            if(email_input.value.trim() < 2){
                msg.push('Email should not be shourt');
            }
            if(!email_input.value.trim().match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")){
                msg.push('Email should match pattren');
            }
        }
        
        if(pass_input.value == ""){
            msg.push('Password should not be emputy');
        }else{
            if(pass_input.value.trim() < 2){
                msg.push('Password should not be shourt');
            }
        }

        if(con_pass_input.value == ""){
            msg.push('Confirm password should not be emputy');
        }else{
            if(con_pass_input.value.trim() < 2){
                msg.push('Confirm password should not be shourt');
            }
            if(con_pass_input.value.trim() == pass_input.value.trim()){
                msg.push('Confirm password should match the password');
            }
        }

        if(msg.length > 0){
            e.preventDefault();
            errMessage.innerText = msg.join(',\n')+'.';
        }else{
            return alert('Submeted');
        }
        
    }else{
        errMessage.innerText = "We don't have Login for now.";
    }
}