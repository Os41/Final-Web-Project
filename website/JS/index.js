document.getElementById('findBtn1').addEventListener("click", () => showMoreText(1));
document.getElementById('findBtn2').addEventListener("click", () => showMoreText(2));
document.getElementById('findBtn3').addEventListener("click", () => showMoreText(3));
document.getElementById('menu').addEventListener("click", toggleMenu);

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

function toggleMenu() {
    let menu = document.getElementById('menu');
    let tabs = document.getElementById('tabs');
    let header = document.getElementsByTagName('header')[0];
    let tabs_list = document.getElementById('tabsList');

    if(menu.getAttribute("alt") === 'menu'){
        menu.setAttribute("alt", 'cross');
        menu.setAttribute("src", './Media/icons/cross.png');
        header.setAttribute('class', 'header add-1');
        tabs_list.setAttribute('class', 'add-2');
        tabs.setAttribute('class', 'add-3');
    }else{
        menu.setAttribute("alt", 'menu');
        menu.setAttribute("src", './Media/icons/menu.png');
        header.setAttribute('class', 'header');
        tabs_list.setAttribute('class', '');
        tabs.setAttribute('class', '');
    }
}