const firebaseConfig = {
   apiKey: "AIzaSyAyjzdcpi5W9-gv7TWVb8ULsB25C7_jROs",
   authDomain: "contactform-835f6.firebaseapp.com",
   databaseURL: "https://contactform-835f6-default-rtdb.firebaseio.com",
   projectId: "contactform-835f6",
   storageBucket: "contactform-835f6.appspot.com",
   messagingSenderId: "48161173292",
   appId: "1:48161173292:web:0e423d6aa02e13c5b90689",
   measurementId: "G-ZPQDY8MTBZ"
 };

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

firebase.initializeApp(firebaseConfig);

let contactFormDB = firebase.database().ref('contactForm');

document.getElementById("contactForm").addEventListener("submit", submitForm);
function submitForm(e){
   e.preventDefault();

   let firstName=getElementVal("firstName");
   let lastName=getElementVal("lastName");
   let emailInfo=getElementVal("emailInfo");
   let phoneNumber=getElementVal("phoneNumber");
   let message=getElementVal("message");

   saveMessages(firstName, lastName, emailInfo, phoneNumber, message);
   document.querySelector(".alert").style.display = "block";

   //   remove the alert
   setTimeout(() => {
     document.querySelector(".alert").style.display = "none";
   }, 3000);

   //   reset the form
   document.getElementById("contactForm").reset();
}

const saveMessages = (firstName, lastName, emailInfo, phoneNumber, message) => {
   let newContactForm = contactFormDB.push();
 
   newContactForm.set({
     first_Name: firstName,
     last_Name: lastName,
     email: emailInfo,
     phone_Number: phoneNumber,
     message: message,
   });
 };

const getElementVal = (id) =>{
   return document.getElementById(id).value;
};
