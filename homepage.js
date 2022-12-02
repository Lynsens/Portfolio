var menuOpened = false;

const links = ['https://github.com/397-f21/drawly', 'https://github.com/397-f21/poketo'];
const images = ['images/drawly.png', 'images/poketo.png'];

function init(){
    navNumber(0);
}

function openMenu() {
    var div = document.getElementsByClassName("menu_bar");
    var button = document.getElementById("menu_button");
    if(!menuOpened){
        div[0].style.visibility='visible'; 
        button.style.transform='rotate(90deg)';

        menuOpened = true;
    }
    else{
        div[0].style.visibility='hidden'; 
        button.style.transform='rotate(0deg)';

        menuOpened = false;
    }
}

function navNumber(i) {
    var image = document.getElementById("showcase_img");
    var link = document.getElementById("github_link");
    for(let j = 0; j < links.length; j++){
        if(j == i){
            document.getElementById(j).style.fontWeight= 'bold';
        }
        else{
            document.getElementById(j).style.fontWeight= 'normal';
        }
    }
    link.setAttribute("href", links[i]);
    image.setAttribute("src", images[i]);
}

init();