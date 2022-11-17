const firebaseConfig = {
      apiKey: "AIzaSyDthDRvncKeiX8fkfxoR6XVU9L-6LNPcCk",
      authDomain: "kwitterdata-4deec.firebaseapp.com",
      databaseURL: "https://kwitterdata-4deec-default-rtdb.firebaseio.com",
      projectId: "kwitterdata-4deec",
      storageBucket: "kwitterdata-4deec.appspot.com",
      messagingSenderId: "57078113968",
      appId: "1:57078113968:web:1dc7569644acfbd5a27d75"
};
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("room_name :" + room_name);
                  row = "<div class = 'room_name' + id = "+Room_names+"onclick = 'RedirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function AddRoom() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"Adding Room Name..."
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}
function RedirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function Logout(){
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}