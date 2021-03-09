//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
 function send(){
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
            name : user_name,
            message:msg,
            like:0
        });
        document.getElementById("msg").value = "";
 }
//End code
      } });  }); }
getData();

      
