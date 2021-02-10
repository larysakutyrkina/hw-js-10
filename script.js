function getPassword() {
    document.addEventListener("click", event => {

       if (event.target.className.includes("fa-eye-slash")) {
           event.target.classList.replace("fa-eye-slash", "fa-eye");
           event.target.previousElementSibling.type = "password";

       }else if ((event.target.className.includes("fa-eye"))) {
           event.target.classList.replace("fa-eye", "fa-eye-slash")
           event.target.previousElementSibling.type = "text";
       }
    });
}

const passwordWrong = document.querySelector(".password-wrong");
    let inputPassword = document.querySelector(".input-password")
    let inputPasswordConfirmation = document.querySelector(".password__confirmation")
    let submitButton = document.querySelector(".submit-button")

    submitButton.addEventListener("click", event =>{
    event.preventDefault()
    if(inputPassword.value === inputPasswordConfirmation.value){
        passwordWrong.className = "password-wrong";
        alert("You are welcome")
    }else {
        passwordWrong.classList.add("active");
    }
});


getPassword();


