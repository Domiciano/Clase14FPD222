const menubutton = document.getElementById('menubutton');
const menu = document.getElementById('menu');
const content = document.getElementById('content');

menu.style.width = "0px";

menubutton.addEventListener('click', function(){
    console.log(menu.style.width);
    if(menu.style.width === "0px"){
        menu.style.width = "200px";
        content.style.left = "208px";
    }else{
        menu.style.width = "0px";
        content.style.left = "8px";
    }
    
});