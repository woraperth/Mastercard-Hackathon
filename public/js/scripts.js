$(document).ready(function() {
  // Driver Page
  $('input[type=radio][name=question]').change(function() {
    if (this.value == 'yes') {
      $('.taxi-info').slideDown();
    }
    else if (this.value == 'no') {
      $('.taxi-info').slideUp();
    }
  });

  $('.open-dropdown').on('click', function() {
    $('.dropdown').hide();
    $(this).find('.dropdown').fadeToggle();
  });
});


// // FB Authentication
// var provider = new firebase.auth.GoogleAuthProvider();
// var $name = document.getElementById('name');
// var $login = document.getElementById('login');
// $login.onclick = function() {
//   var userprofile = firebase.auth().currentUser;
//   if(userprofile) {
//     // Sign Out
//     firebase.auth().signOut().then(function() {
//       console.log('Signed Out');
//     }, function(error) {
//       console.error('Sign Out Error', error);
//     });
//   } else {
//     // Sign In
//     firebase.auth().signInWithPopup(provider).then(function(result) {
//       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//       // var token = result.credential.accessToken;
//       // The signed-in user info.
//       // var user = result.user;
//     }).catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // The email of the user's account used.
//       var email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential;
//     });
//   }
// }

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // Sign In
//     $name.textContent = ' ' + user.displayName;
//     $login.textContent = 'Log Out';
//   } else {
//     // Sign Out
//     $name.textContent = '';
//     $login.textContent = 'Log In';
//   }
// });


// Google Maps API Key: AIzaSyDDycamY0vc0yQq6s3ih0rCaJrIxM1-HIs
// INSERTING DATA
// // Chat
// var chatform = document.getElementById('chatform-form');
// chatform.onsubmit = function() {
//   var chatinput = document.getElementById('chatform-input');
//   var chatmsg = chatinput.value;
//   chatinput.value = '';
  
//   // Submit message to firebase
//   var userprofile = firebase.auth().currentUser;
//   firebase.database().ref('messages/').push({
//     uid: userprofile.uid,
//     name: userprofile.displayName,
//     email: userprofile.email,
//     message : chatmsg,
//     date: new Date().toLocaleString()
//   });

//   return false;
// };

// RETRIEVE DATA
// function retrieveChat() {
//   var ref = firebase.database().ref("messages").limitToLast(20);
//   ref.on('child_added', function(data) {
//     console.log('added');
//     ctime = data.val().date || 'some day';
//     newChat(data.val().name, data.val().message, ctime);
//   });

//   ref.on('child_changed', function(data) {
//     console.log('changed');
//     ctime = data.val().date || 'some day';
//     newChat(data.val().name, data.val().message, ctime);
//   });
// }
