$(document).ready(function(){

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBJ9oytKN5Mvs5LRUZs3iTOq6uP8NPoUkQ",
    authDomain: "hw7-firebase-24a54.firebaseapp.com",
    databaseURL: "https://hw7-firebase-24a54.firebaseio.com",
    projectId: "hw7-firebase-24a54",
    storageBucket: "hw7-firebase-24a54.appspot.com",
    messagingSenderId: "630173090412",
    appId: "1:630173090412:web:50861adb35616ea8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

})

//variable to store the database info 
var database = firebase.database();

//variables 
var trainName = "";
var trainDestination = "";
var trainFrequency = 0;
var trainTime = "";
var clickCounter = 1;

//Capturing the add train button click 

$("#add-train").on("click", function(event){
    event.preventDefault();
    if ($("#train-input").val() > 24) {
        alert("There are only 24 hours in a day");
    } else {
        //variables that will hold the user input values
        trainName = $("#train-input").val().trim();
        trainDestination = $("#destination-input").val().trim();
        trainTime = $("#train-input").val().trim();
        trainFrequency = $("#frequency-input").val().trim();

        //console.log to see if the variables are holding the user input values
        console.log("Input Values");
        console.log(trainName);
        console.log(trainDestination);
        console.log(trainTime);
        console.log(trainFrequency);

        //Local object for holding train details
        var trainDetail = {
            name : trainName,
            destination : trainDestination,
            frequency : trainFrequency,
            time : trainTime
        }

    };
})