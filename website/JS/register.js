document.getElementById('button_id_signUp').addEventListener("click", showLogin);

function showLogin(){
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