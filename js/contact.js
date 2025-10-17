// Validation state
let isValidMail = false;
let isValidPhNo = false;

// Email validation
function ValidateEmail(inputText) {
   const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(inputText.value.match(mailformat)) {
      isValidMail = true;
      inputText.classList.remove('is-invalid');
      inputText.classList.add('is-valid');
      return true;
   } else {
      isValidMail = false;
      inputText.classList.remove('is-valid');
      inputText.classList.add('is-invalid');
      return false;
   }
}

// Phone number validation (Indian format)
function ValidatePhoneNumber(inputText) {
   const phoneformat = /^[6-9]\d{9}$/;
   if(inputText.value.match(phoneformat)) {
      isValidPhNo = true;
      inputText.classList.remove('is-invalid');
      inputText.classList.add('is-valid');
      return true;
   } else {
      isValidPhNo = false;
      inputText.classList.remove('is-valid');
      inputText.classList.add('is-invalid');
      return false;
   }
}

// Form submission
document.getElementById("contactForm").addEventListener("submit", submitForm);

async function submitForm(e) {
   e.preventDefault();
   
   // Validate before submission
   const emailInput = document.getElementById("emailInfo");
   const phoneInput = document.getElementById("phoneNumber");
   
   ValidateEmail(emailInput);
   ValidatePhoneNumber(phoneInput);
   
   if (!isValidMail || !isValidPhNo) {
      alert("Please enter valid email and phone number!");
      return false;
   }
   
   // Get form values
   const formData = {
      firstName: getElementVal("firstName"),
      lastName: getElementVal("lastName"),
      email: getElementVal("emailInfo"),
      phoneNumber: getElementVal("phoneNumber"),
      message: getElementVal("message")
   };
   
   // Disable submit button
   const submitBtn = document.querySelector('button[type="submit"]');
   submitBtn.disabled = true;
   submitBtn.textContent = 'Submitting...';
   
   try {
      // Call Netlify Function
      const response = await fetch('/.netlify/functions/submitContact', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
         // Show success message
         const alertBox = document.querySelector(".alert");
         alertBox.style.display = "block";
         
         // Hide alert after 3 seconds
         setTimeout(() => {
            alertBox.style.display = "none";
         }, 3000);
         
         // Reset form and validation states
         document.getElementById("contactForm").reset();
         isValidMail = false;
         isValidPhNo = false;
         
         // Remove validation classes
         emailInput.classList.remove('is-valid', 'is-invalid');
         phoneInput.classList.remove('is-valid', 'is-invalid');
      } else {
         throw new Error(result.error || 'Failed to submit form');
      }
      
   } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
   } finally {
      // Re-enable submit button
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit';
   }
}

// Helper function to get element value
const getElementVal = (id) => {
   return document.getElementById(id).value;
};