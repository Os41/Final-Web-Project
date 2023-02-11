document.getElementById('namesSelection').addEventListener("change", showLogin);

function showLogin(){
    let personImg = document.getElementById('personImg');

    let instagram = document.getElementById('instagram');
    let twitter = document.getElementById('twitter');
    let email = document.getElementById('email');

    let personInfo = document.getElementById('personInfo');
    let personDetails = document.getElementById('personDetails');

    var selectedValue = this.value;


    if(selectedValue == "Azoz"){
        personImg.setAttribute("src", "../Media/images/AzozImage.png");

        instagram.setAttribute("href", "");
        twitter.setAttribute("href", "");
        email.setAttribute("href", "");

        personInfo.innerText = "A";
        personDetails.innerText = "A";

    }else if(selectedValue == "Ahmed"){
        personImg.setAttribute("src", "../Media/images/AhmedImage.jpeg");

        instagram.setAttribute("href", "");
        twitter.setAttribute("href", "");
        email.setAttribute("href", "");

        personInfo.innerText = "B";
        personDetails.innerText = "B";

    }else if(selectedValue == "Farooq"){
        personImg.setAttribute("src", "../Media/images/FarooqImage.png");

        instagram.setAttribute("href", "");
        twitter.setAttribute("href", "");
        email.setAttribute("href", "");

        personInfo.innerText = "C";
        personDetails.innerText = "C";

    }else if(selectedValue == "Omar"){
        personImg.setAttribute("src", "../Media/images/OmarImage.png");

        instagram.setAttribute("href", "");
        twitter.setAttribute("href", "");
        email.setAttribute("href", "");

        personInfo.innerText = "D";
        personDetails.innerText = "D";
    }
}