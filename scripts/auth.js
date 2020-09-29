//sign up
const signupForm = document.querySelector('#action_page');
document.querySelector('button').addEventListener('click', (e) => {
   
    e.preventDefault();
  

    //get inf
    const email = document.getElementById('email'); 
   const inputv = email.value;

    const password = document.getElementById('psw');
    const inputvl = password.value;
    //sign up user
    firebase.auth().createUserWithEmailAndPassword(inputv, inputvl).then(cred => {
        
    console.log(cred.user) 
    alert(`done`);
    const myModal = document.querySelector('#modal-singup');
    // M.modal-singup.getInstance(myModal).close();
//    signupForm.close();
    
        });
});

// function myGeeks() { 
//     var x = document.getElementById("#121"); 
      
//     if (x.innerHTML === filterstatus == 0) { 
//         x.innerHTML = ""; 
//     } else { 
//         x.innerHTML = "Welcome "; 
//     } 
// } 

// const logout = document.querySelector('#loguotTest');
// logout.addEventListener('click', (e) => {
//     e.preventDefault();
//     firebase.auth().signOut()
//         .then(function () {
//             // Sign-out successful.
//             console.log('loged out successful')
//         }).catch(function () {
//             // An error happened.
//             console.log('error')
//         });
// })

// //log

 const loginForm = document.querySelector('#logein');
 document.querySelector('input').addEventListener('click', (e) => {
     e.preventDefault();

     //inf
     const emaill = document.getElementById('username'); 
   const inputva = emaill.value;

   const passwordd = document.getElementById('password');
    const inputvla = passwordd.value;

    firebase.auth().signInWithEmailAndPassword(inputva, inputvla).then(cred => {
        console.log(cred.user)
        // loginForm.reset();
        })
 })

