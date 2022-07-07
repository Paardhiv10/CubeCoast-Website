function buttont(){
   window.location.href='https://t.me/+M0BTBqt6wQpkZDll'
}

function clicked(e)
{
    if(!confirm('Do you want to submit?')) {
        e.preventDefault();
    }
}

/*const form  = document.getElementById('from');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailInfo = document.getElementById('emailInfo');
const phoneNumber = document.getElementById('phoneNumber');

form.addEventListener('submit', e=>{
   e.preventDefault();
   validateInputs();
});

const isValidEmail = () => {
   const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
   const firstNameValue = firstName.value.trim();
   const lastNameVlaue = lastName.value.trim();
   const emailInfoValue = emailInfo.value.trim();
   const phoneNumberValue = phoneNumber.value.trim();

   if(emailInfoValue === ''){
      setError(email, 'Email is required');
   } else if (!isValidEmail(emailInfoValue)){
      setError(email, 'Provide a valid email address');
   } else {
      setSucess(email);
   }

}; */

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


 