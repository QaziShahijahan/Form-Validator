// // // ..............................................................
// // .......................form using simple validations...................................................

// const form = document.querySelector('#form')
// const name = document.querySelector('#name')
// const email = document.querySelector('#email')
// const phone = document.querySelector('#phone')
// const password = document.querySelector('#password')
// const submit = document.querySelector('#submit')

// form.addEventListener('submit' , (event)=>{
//     const nameValue = name.value.trim();
//     const emailValue = email.value.trim();
//     const phoneValue = phone.value.trim();
//     const passwordValue = password.value.trim();

// if(nameValue == ""){
//     event.preventDefault();
//     alert("please provide your name");
//     name.focus();
//     return true;
// }
// if(!isNaN(nameValue)){
//     event.preventDefault();
//     alert("please provide a valid name");
//     name.focus();
//     return true;
// }
// if(emailValue == ""){
//     event.preventDefault();
//     alert("please provide an email")
//     email.focus();
//     return false;
// }
// if(phoneValue == ""){
//     event.preventDefault();
//     alert("please provide ypur phone no")
//     phone.focus();
//     return false;
// }
// if(phoneValue.length < 10 || phoneValue.length > 10){
//     event.preventDefault();
//     alert('please enter a valid phone number');
//     phone.focus();
//     return false;
// }
// if(passwordValue == ""){
//     event.preventDefault();
//     alert("please provide a password")
//     password.focus();
//     return false;
// }
// if(passwordValue.length < 5){
//     event.preventDefault();
//     alert('enter password greter that 5 digits');
//     password.focus();
//     return false
// }

// confirm('Sure ! to submit form')
// })

// // .................................using reg ex for  form validations ...............................................

// // ....adding eventlistener on form Submit .........................................................................
form.addEventListener("submit", (e) => {
  // //........firstly fetching values form all input fields and store them in variable and trimming them .....................................
  const username = document.querySelector("#username").value.trim();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const password = document.querySelector("#password").value.trim();

  // // .....adding reg ex for every input field
  let usernameCheck = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
  let nameCheck = /^[A-Za-z. ]{3,20}$/;
  let emailCheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  let phoneCheck = /^\d{10}$/;
  let passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9@#$%^&*]{8,15}$/;

  // //..................... check one by one every input field with reg ex........................................
  if (usernameCheck.test(username)) {
    document.querySelector("#usernameerror").innerHTML = "";
  } else {
    document.querySelector("#usernameerror").innerHTML =
      "Please provide a valid username";
    e.preventDefault();
    document.querySelector("#username").focus();
    return false;
  }

  if (nameCheck.test(name)) {
    document.querySelector("#nameerror").innerHTML = "";
  } else {
    document.querySelector("#nameerror").innerHTML =
      "Please provide your valid  name";
    e.preventDefault();
    document.querySelector("#name").focus();
    return false;
  }

  if (emailCheck.test(email)) {
    document.querySelector("#emailerror").innerHTML = "";
  } else {
    document.querySelector("#emailerror").innerHTML =
      "Please provide a valid email address";
    e.preventDefault();
    document.querySelector("#email").focus();
    return false;
  }

  if (phoneCheck.test(phone)) {
    document.querySelector("#phoneerror").innerHTML = "";
  } else {
    document.querySelector("#phoneerror").innerHTML =
      "Please provide a valid phone number";
    e.preventDefault();
    document.querySelector("#phone").focus();
    return false;
  }

  if (passwordCheck.test(password)) {
    document.querySelector("#passworderror").innerHTML = "";
  } else {
    document.querySelector("#passworderror").innerHTML =
      "Please enter a valid paswword";
    e.preventDefault();
    document.querySelector("#password").focus();
    return false;
  }
  confirm("sure ! to submit form now ?");
});
