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
        })
       
});