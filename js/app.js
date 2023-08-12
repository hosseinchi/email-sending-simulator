// variables
const sendBtn = document.querySelector("#sendBtn"),
  email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  message = document.querySelector("#message"),
  form = document.querySelector("#email-form"),
  resetBtn = document.querySelector("#resetBtn")
  

// eventListeners
eventListeners();

function eventListeners() {
  // initialize all over the page
  document.addEventListener("DOMContentLoaded", appInit);
  // validating value of inputs field
  email.addEventListener("blur", validateField);
  subject.addEventListener("blur", validateField);
  message.addEventListener("blur", validateField);

  form.addEventListener('submit', submitData)

  resetBtn.addEventListener('click', resetFrom)
}

// functions

// initialize all over the page
function appInit() {
  // disable the send button
  sendBtn.disabled = true;
}

// submit data, show the spiner and reset the form 
function submitData(e){
    e.preventDefault()
    
    console.log(e.target);

        // show the spinner 
        showSpinner()
    

}
// showing the spinner 
function showSpinner(){
    const spinnerImage = document.querySelector("#spinner")

    spinnerImage.style.display = 'block'

    const mailGif = document.createElement('img')
    mailGif.src = '../img/mail.gif'

    setTimeout(() => {
        spinnerImage.style.display = 'none'
        document.querySelector("#loaders").appendChild(mailGif)
        mailGif.style.display = 'block'
        setTimeout(()=>{
            mailGif.style.display = 'none'
            resetFrom()
        }, 3500)
    }, 3000);
}

// reset the form 
function resetFrom(){
    form.reset()
}

// validating value of inputs field
function validateField() {
  // validating that the inputs values are not empty
  validatelength(this);

  // making a nodeList of error classes
  let errorClasses = document.querySelectorAll(".error");

  // validating that the inputs values for enabling the send button
  if (
    email.value.length !== 0 &&
    subject.value.length !== 0 &&
    message.value.length !== 0
  ) {
    // validating that does any tags with error class exist or not
    if (errorClasses.length === 0) {
      // enable the send button
      sendBtn.disabled = false;
    }
  }
}

// validating length of values of fields
function validatelength(field) {
  // validating that is type of selected input email or not
  if (field.type === "email") {
    // checking that the client entered a valid email or not
    validateEmail(field);
  } else {
    // checking that the fields are not empty
    if (field.value.length > 0) {
      // make the border bottom green and remove the error class
      field.style.borderBottomColor = "green";
      field.classList.remove("error");
    } else {
      // make the border bottom red and add error class
      field.style.borderBottomColor = "red";
      field.classList.add("error");
    }
  }
}

// checking that the client has been entered a valid email or not
function validateEmail(field) {
  // the entered values have to contains ( @ , . ) for email field
  if (field.value.includes("@") && field.value.includes(".")) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}
