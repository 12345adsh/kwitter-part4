    //ADD YOUR FIREBASE LINKS HERE
   // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBz0aGRAtyIj-e0-67BpU6tF-b4ruExejw",
    authDomain: "kwitter-40002.firebaseapp.com",
    databaseURL: "https://kwitter-40002-default-rtdb.firebaseio.com",
    projectId: "kwitter-40002",
    storageBucket: "kwitter-40002.appspot.com",
    messagingSenderId: "998070846574",
    appId: "1:998070846574:web:7b7be0cf4a3dba80d5127f",
    measurementId: "G-6S6DKECWNH"
    }


    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username=localStorage.getItem("username");
    document.getElementById("username").innerHTML ="Welcome "+username + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - "+ Room_names);
      row = "<div class='room_name'id="+Room_names+"onclick ='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addroom(){
    room_name = document.getElementById("room_name").value; 
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    }); 
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html"
  }  