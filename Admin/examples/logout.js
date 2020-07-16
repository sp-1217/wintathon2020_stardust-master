const logout1=document.querySelector('#logout1');
logout1.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("clicked signout");
auth.signOut().then(()=>{
   console.log("user signed out");
})
});