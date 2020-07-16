const loginform=document.querySelector('#loginform');
console.log("12345");
loginform.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("credentialbhbbhbhbhshhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
    const email=loginform['email'].value;
    const password=loginform['password'].value;
    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(cred=>{
console.log(cred);
console.log("credentials");
// if(cred.user) {
//     window.location.href='http://127.0.0.1:5501/Econf/Admin/index.html';
//     console.log("vvvjgggggggggggggggggg");
//   }
    })
})
