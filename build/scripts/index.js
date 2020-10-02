const email = document.getElementById('email'); 
   const inputv = email.value;
//listen
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(`user logged in :` ,user)
        document.getElementById("121").style.visibility = "hidden";
       
        var element = document.getElementById("emailUser");
              element.innerHTML = inputv;
        // User is signed in.
    } else {
        console.log(`user logged out`)
        document.getElementById("burger").style.visibility = "hidden";
        document.getElementById("121").style.visibility = "visible";
        // User is signed out.
    }
});





const logout = document.querySelector('#loguotTest');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
})






















// import fb from "firebase/app"

// export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()
// var app_fireBase = {};
//  // Your web app's Firebase configuration
//  var firebaseConfig = {
//     apiKey: "AIzaSyBihi38sOV5GnWrq-vCdpPL4eYClPL52IM",
//     authDomain: "hsport.firebaseapp.com",
//     databaseURL: "https://hsport.firebaseio.com",
//     projectId: "hsport",
//     storageBucket: "hsport.appspot.com",
//     messagingSenderId: "798265000582",
//     appId: "1:798265000582:web:d7ff83ea185b97dc56c707"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   //str auth ref
//   const auth = firebase.auth();
//   const db = firebase.firestore();
//   app_fireBase = firebase;
//     //(function(){
    
//     // Initialize the FirebaseUI Widget using Firebase.
//   var ui = new firebaseui.auth.AuthUI(firebase.auth());
//   var uiConfig = {
//       callbacks: {
//         signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//           // User successfully signed in.
//           // Return type determines whether we continue the redirect automatically
//           // or whether we leave that to developer to handle.
          
//           return true;
//         },
//         uiShown: function() {
//           // The widget is rendered.
//           // Hide the loader.
//           document.getElementById('loader').style.display = 'none';
//         }
//       },
//       // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//       signInFlow: 'popup',
//       signInSuccessUrl: 'indexsd.html',
//       signInOptions: [
//         // Leave the lines as is for the providers you want to offer your users.
//       //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//       //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
//       ],
//       // Terms of service url.
//       tosUrl: 'indexsd.html',
//       // Privacy policy url.
//       privacyPolicyUrl: '<your-privacy-policy-url>'
//     };

//     // The start method will wait until the DOM is loaded.
//        ui.start('#firebaseui-auth-container', uiConfig);
// })()