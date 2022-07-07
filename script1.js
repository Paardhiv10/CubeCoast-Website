const emailId = document.getElementById('emailId')
const password = document.getElementById('password')
const form = document.getElementById('form')
const error = document.getElementById('error')

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
