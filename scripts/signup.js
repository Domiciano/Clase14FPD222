const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passInput = document.getElementById('passInput');
const repassInput = document.getElementById('repassInput');
const signupBTN = document.getElementById('signupBTN');
const localStorage = window.localStorage;

let users = [];
let savedUsers = localStorage.getItem("users");
if(savedUsers !== null){
    users = JSON.parse(savedUsers);
}

function signup(){
    //Que las dos contraseñas concuerden
    if(passInput.value !== repassInput.value){
        alert('Las contraseñas no concuerdan!!');
        return;
    }
    //Que las contraseñas sean minimo de 6 caracteres
    if(passInput.value.length <= 5){
        alert('Las contraseñas deben tener minimo 6 carácteres');
        return;
    }
    let user = new User(
        nameInput.value,
        emailInput.value,
        passInput.value
    );
    users.push(user);
    let json = JSON.stringify(users);
    localStorage.setItem("users",json);
    window.location.href = "login.html";
}

signupBTN.addEventListener('click', signup);