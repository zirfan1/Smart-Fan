//Unique Firebase Object
var firebaseConfig = {
  apiKey: "AIzaSyD-Q9nyBrDlwMUkbWAXlRsMal4W0AiEMPU",
    authDomain: "fan1-c1e30.firebaseapp.com",
    databaseURL: "https://fan1-c1e30-default-rtdb.firebaseio.com",
    projectId: "fan1-c1e30",
    storageBucket: "fan1-c1e30.appspot.com",
    messagingSenderId: "688179860369",
    appId: "1:688179860369:web:383bb3f27b161bbb18c030",
    measurementId: "G-9XCDMJ66EV"
};

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("Command")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let firstName = document.getElementById('fname').value
  let lastName = document.getElementById('lname').value

  //Save Form Data To Firebase
  db.doc().set({
    fname: firstName,
    lname: lastName,
    country: country
  }).then( () => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })
