 const firebaseConfig = {
    apiKey: "AIzaSyD-Q9nyBrDlwMUkbWAXlRsMal4W0AiEMPU",
    authDomain: "fan1-c1e30.firebaseapp.com",
    databaseURL: "https://fan1-c1e30-default-rtdb.firebaseio.com",
    projectId: "fan1-c1e30",
    storageBucket: "fan1-c1e30.appspot.com",
    messagingSenderId: "688179860369",
    appId: "1:688179860369:web:383bb3f27b161bbb18c030",
    measurementId: "G-9XCDMJ66EV"
  };

firebase.initializeApp(firebaseConfig);

var myDB = firebase.database().ref('Data');

function on(){
myDB.set({
    'Condition':'on'
});
  
}

function off(){
  myDB.set({
    'Condition':'off'
  });
}