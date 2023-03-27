function clicked(e)
{
   if (isValidMail && isValidPhNo) {
      alert("Do you want to submit?");
      return true;
   }
   else {
      alert("Enter valid details");
      e.preventDefault();
      return false;
   }
}
let isValidMail = false;
let isValidPhNo = false;
function ValidateEmail(inputText){
   let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(inputText.value.match(mailformat)){
      document.form.text1.focus();
      isValidMail = true;
      return true;
   }else{
      alert("Please enter a valid email address!");
      document.form.text1.focus();
      isValidMail = false;
      return false;
   }
}

function ValidatePhoneNumber(inputText){
   let phoneformat = /^[6-9]\d{9}$/gi;
   if(inputText.value.match(phoneformat)){
      document.form.text2.focus();
      isValidPhNo = true;
      return true;
   }else{
      alert("Please enter a valid phone number!");
      document.form.text2.focus();
      isValidPhNo = false;
      return false;
   }
}

