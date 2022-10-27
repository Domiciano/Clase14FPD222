const menubutton = document.getElementById('menubutton');
const menu = document.getElementById('menu');
const content = document.getElementById('content');
const addPost = document.getElementById('addPost');
const localStorage = window.localStorage;


function loadPosts(json){
    console.log(json);
    let posts = JSON.parse(json);
    console.log(posts);
    let html = "";
    for(let i=0 ; i < posts.length ; i++){
        let post = new Post(posts[i].user, posts[i].message);
        html += `<h2>${post.message}</h2>`;
    }
    content.innerHTML = html;
}

//Cargar informacion del localstorage
let savedPost = localStorage.getItem('posts');
if(savedPost != null){
    //Sí hay informacion almacenada
    loadPosts(savedPost);
}



addPost.addEventListener('click', function(){
    window.location.href = "postComposer.html"
});


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