const emailInput = document.getElementById('emailInput');
const passInput = document.getElementById('passInput');
const loginBTN = document.getElementById('loginBTN');
const localStorage = window.localStorage;

let currentUser = localStorage.getItem("currentUser");
if(currentUser !== null){
    window.location.href = "index.html";
}


function login(){
    let json = localStorage.getItem("users");
    if(json !== null){
        let users = JSON.parse(json);
        console.log(users);
        let email = emailInput.value;
        let pass = passInput.value;
        for(let i=0 ; i<users.length ; i++){
            if(users[i].email === email){
                if(users[i].pass === pass){
                    window.location.href = "index.html";
                    let currentUser = JSON.stringify(users[i]);
                    localStorage.setItem("currentUser", currentUser);
                    return;
                }else{
                    alert('La contraseña no concuerda');
                    return;
                }
            }
        }
        alert('Parece que no estás registrado');
    }
}

loginBTN.addEventListener('click', login);