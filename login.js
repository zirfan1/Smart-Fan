
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}