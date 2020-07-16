// var firebaseConfig = {
//     apiKey: "AIzaSyDw7cc6NbNR19ePaaeBu7Q8d3e6I0SJB0o",
//     authDomain: "econf-e276a.firebaseapp.com",
//     databaseURL: "https://econf-e276a.firebaseio.com",
//     projectId: "econf-e276a",
//     storageBucket: "econf-e276a.appspot.com",
//     messagingSenderId: "443698727529",
//     appId: "1:443698727529:web:cbd475be0cdc2d610cb0f8",
//     measurementId: "G-WKLQ5FM57Y"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

  //reference to conferences collection
 
  var confref=db1.ref('conferences');

document.getElementById('create_form').addEventListener('submit',createsubmit);

//submit form
function createsubmit(e){
    e.preventDefault();
    console.log(123);
    var user = firebase.auth().currentUser;
    console.log(user);
    //get values
    //var confid=getInputval('conf_id');
    var conf_name=getInputval('cname');
    var org_name=getInputval('oname');
    var startdate=getInputval('sdate');
    var enddate=getInputval('edate');
    var location1=getInputval('l1');
    var location2=getInputval('l2');
    var location3=getInputval('l3');
    var location4=getInputval('l4');
    var deadline=getInputval('ddate');
    var type=getInputval('type');
    var description=getInputval('description');
    //console.log(conf_name);
    saveConf(conf_name,org_name,startdate,enddate,location1,location2,location3,location4,description,deadline,type);
}


//function to get form valiues

function getInputval(id){

return document.getElementById(id).value;

}


function saveConf(conf_name,org_name,startdate,enddate,location1,location2,location3,location4,description,deadline,type)
{

    var newconfref=confref.child(conf_name);
    newconfref.set({
       
        conf_name:conf_name,
        org_name:org_name,
        startdate:startdate,
        enddate:enddate,
        location1:location1,
        location2:location2,
        location3:location3,
        location4:location4,
        description:description,
        deadline:deadline,
        type:type
    });
// var newconfref=confref;
//     newconfref.push({
       
//         conf_name:conf_name,
//         org_name:org_name,
//         startdate:startdate,
//         enddate:enddate,
//         location1:location1,
//         location2:location2,
//         location3:location3,
//         location4:location4,
//         description:description
//     }).key;


    //console.log(confref);
}