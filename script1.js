const emailId = document.getElementById('emailId')
const password = document.getElementById('password')
const form = document.getElementById('form')
const error = document.getElementById('error')


function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
       document.form.text1.focus();
       return true;
    }else{
       alert("You have entered an invalid email address!");
       document.form.text1.focus();
       return false;
    }
}

form.addEventListener('submit', (e) => {
    if (password.value.length <= 6){
        alert('Password must be longer than 6 characters');
    }
    if (password.value.length >= 15){
        alert('Password cannot be larger than 15 characters');
    }
    if (password.value === 'password'){
        alert('Password cannot be password');
    }
    if (password.value === 'Password'){
        alert('Password cannot be Password');
    }  
})
