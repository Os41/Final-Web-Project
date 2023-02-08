document.getElementById('findBtn1').addEventListener("click", () => showMoreText(1));
document.getElementById('findBtn2').addEventListener("click", () => showMoreText(2));
document.getElementById('findBtn3').addEventListener("click", () => showMoreText(3));

function showMoreText(index) {
    let text1 = document.getElementById('hideText1');
    let text2 = document.getElementById('hideText2');
    let text3 = document.getElementById('hideText3');

    let btn1 = document.getElementById('findBtn1');
    let btn2 = document.getElementById('findBtn2');
    let btn3 = document.getElementById('findBtn3');

    if(index == 1){
        text1.style.display = 'inline';
        btn1.style.display = 'none';
    }else{
        text1.style.display = 'none';
        btn1.style.display = 'block';
    }

    if(index == 2){
        text2.style.display = 'inline';
        btn2.style.display = 'none';
    }else{
        text2.style.display = 'none';
        btn2.style.display = 'block';
    }

    if(index == 3){
        text3.style.display = 'inline';
        btn3.style.display = 'none';
    }else{
        text3.style.display = 'none';
        btn3.style.display = 'block';
    } 
}