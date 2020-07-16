const signupform=document.querySelector('#signup');
signupform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email=signupform['user_mail'].value;
    const password=signupform['user_passwd'].value;
    console.log(email);
    console.log(password);
   firebase.auth().createUserWithEmailAndPassword(email, password)
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
  // ...
});
})


