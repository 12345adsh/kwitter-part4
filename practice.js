var firebaseConfig = {
    apiKey: "AIzaSyBz0aGRAtyIj-e0-67BpU6tF-b4ruExejw",
    authDomain: "kwitter-40002.firebaseapp.com",
    projectId: "kwitter-40002",
    storageBucket: "kwitter-40002.appspot.com",
    messagingSenderId: "998070846574",
    appId: "1:998070846574:web:7b7be0cf4a3dba80d5127f",
    measurementId: "G-6S6DKECWNH"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//ADD YOUR FIREBASE LINKS

function adduser(){
  user_name = document.getElementById("user_name").Value;

  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}