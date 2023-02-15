document.getElementById('namesSelection').addEventListener("change", showPerson);

function showPerson(){
    let personImg = document.getElementById('personImg');

    let instagram = document.getElementById('instagram');
    let twitter = document.getElementById('twitter');
    let email = document.getElementById('email');

    let personInfo = document.getElementById('personInfo');
    let personDetails = document.getElementById('personDetails');

    var selectedValue = this.value;


    if(selectedValue == "Azoz"){
        personImg.setAttribute("src", "../Media/images/AzozImage.png");

        twitter.setAttribute("href", "https://twitter.com/azoooz__56");
        email.setAttribute("href", "mailto:azoooz-56@hotmail.com");

        personInfo.innerText = "Software engineering student at the University of Jeddah,  always ready to take on tasks, like teamwork and possesses a high skill in cooperating with team members,";
        personDetails.innerText = "adept at understanding requirements and delivering projects accordingly, have the ability to maintain code by fixing errors in addition to testing, provide new ideas and best quality, loves to explore and self-learning.";

    }else if(selectedValue == "Ahmed"){
        personImg.setAttribute("src", "../Media/images/AhmedImage.jpeg");

        twitter.setAttribute("href", "https://twitter.com/ahmsam900");
        email.setAttribute("href", "mailto:ahmedsami9936@gmail.com");

        personInfo.innerText = "Software engineering student at the University of Jeddah,  always ready to take on tasks, like teamwork and possesses a high skill in cooperating with team members,";
        personDetails.innerText = "adept at understanding requirements and delivering projects accordingly, have the ability to maintain code by fixing errors in addition to testing, provide new ideas and best quality, loves to explore and self-learning.";

    }else if(selectedValue == "Farooq"){
        personImg.setAttribute("src", "../Media/images/FarooqImage.png");

        twitter.setAttribute("href", "https://twitter.com/Futurre98");
        email.setAttribute("href", "mailto:Eng-Farooq@hotmail.com");

        personInfo.innerText = "Software engineering student at the University of Jeddah,  always ready to take on tasks, like teamwork and possesses a high skill in cooperating with team members,";
        personDetails.innerText = "adept at understanding requirements and delivering projects accordingly, have the ability to maintain code by fixing errors in addition to testing, provide new ideas and best quality, loves to explore and self-learning.";

    }else if(selectedValue == "Omar"){
        personImg.setAttribute("src", "../Media/images/OmarImage.png");

        twitter.setAttribute("href", "https://twitter.com/Omar41Saad");
        email.setAttribute("href", "mailto:omar41saad@outlook.com");

        personInfo.innerText = "Software engineering student at the University of Jeddah,  always ready to take on tasks, like teamwork and possesses a high skill in cooperating with team members,";
        personDetails.innerText = "adept at understanding requirements and delivering projects accordingly, have the ability to maintain code by fixing errors in addition to testing, provide new ideas and best quality, loves to explore and self-learning.";
    }
}