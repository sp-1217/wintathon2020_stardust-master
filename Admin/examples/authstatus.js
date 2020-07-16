

auth.onAuthStateChanged(user=>{
   
    if(user){
        console.log(user);
        console.log("user has logged in");
        var user1=auth.currentUser;
        if (user1 != null) {
            user1.providerData.forEach(function (profile) {
              console.log("Sign-in provider: " + profile.providerId);
              console.log("  Provider-specific UID: " + profile.uid);
              console.log("  Name: " + profile.displayName);
              console.log("  Email: " + profile.email);
             
            });
          }}
    //     
    else{
        console.log("user has not signed in");
    }
});