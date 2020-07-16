const signupform=document.querySelector('#signup');
signupform.addEventListener('submit',(e)=>{
    e.preventDefault();
    var firebaseConfig = {
        apiKey: "AIzaSyDw7cc6NbNR19ePaaeBu7Q8d3e6I0SJB0o",
        authDomain: "econf-e276a.firebaseapp.com",
        databaseURL: "https://econf-e276a.firebaseio.com",
        projectId: "econf-e276a",
        storageBucket: "econf-e276a.appspot.com",
        messagingSenderId: "443698727529",
        appId: "1:443698727529:web:cbd475be0cdc2d610cb0f8",
        measurementId: "G-WKLQ5FM57Y"
      };
    const name=signupform['name'].value;
    const email=signupform['email'].value;
    const password=signupform['password'].value;
    const l_url=signupform['l_url'].value;
    const db1 = firebase.database();
    var databaseRef = db1.ref('users');
databaseRef.set({
    name:name,
    email:email,
    l_url:l_url
});
    auth.createUserWithEmailAndPassword(email,password)
    .then(cred=>{
console.log(cred);
console.log("credentials");
    })
    
    
})


      var rowIndex = 1;
      databaseRef.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
       var childKey = childSnapshot.key;
       var childData = childSnapshot.val();
      // console.log(childData.conf_name);
      // console.log(childKey);
       var row = tblUsers.insertRow(rowIndex);
       var part_name = row.insertCell(0);
       var location = row.insertCell(1);
       part_name.appendChild(document.createTextNode(childData.Part_name));
       location.appendChild(document.createTextNode(childData.Location));
       rowIndex = rowIndex + 1;
        });
      });

