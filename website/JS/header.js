document.getElementById('menu').addEventListener("click", () =>  {
    const pageName = window.location.pathname.split('/');
    toggleMenu(pageName[pageName.length -1]);
});

function toggleMenu(page) {
    let menu = document.getElementById('menu');
    let tabs = document.getElementById('tabs');
    let header = document.getElementsByTagName('header')[0];
    let tabs_list = document.getElementById('tabsList');

    if(page == 'index.html'){
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

    }else if(page == "Places.html" || page == "About-us.html"){
        if(menu.getAttribute("alt") === 'menu'){
            menu.setAttribute("alt", 'cross');
            menu.setAttribute("src", '../Media/icons/cross.png');
            header.setAttribute('class', 'add-1');
            tabs_list.setAttribute('class', 'add-2');
            tabs.setAttribute('class', 'add-3');
        }else{
            menu.setAttribute("alt", 'menu');
            menu.setAttribute("src", '../Media/icons/menu.png');
            header.setAttribute('class', 'abs');
            tabs_list.setAttribute('class', '');
            tabs.setAttribute('class', '');
        }
    }else if(page == "Contact-us.html"){
        if(menu.getAttribute("alt") === 'menu'){
            menu.setAttribute("alt", 'cross');
            menu.setAttribute("src", '../Media/icons/cross.png');
            header.setAttribute('class', 'header add-1');
            tabs_list.setAttribute('class', 'add-2');
            tabs.setAttribute('class', 'add-3');
        }else{
            menu.setAttribute("alt", 'menu');
            menu.setAttribute("src", '../Media/icons/menu.png');
            header.setAttribute('class', 'header');
            tabs_list.setAttribute('class', '');
            tabs.setAttribute('class', '');
        }
    }
}
