function validatePassword() {
    let password = document.getElementById("password");
    let passConfirm = document.getElementById("pass-confirm");
    let pwdMatch = document.getElementById("pwd-match-msg");

    if (password.value !== passConfirm.value) {
        pwdMatch.textContent = "* Passwords do not match";
        pwdMatch.style.color = "red";
        password.classList.add("password-mismatch");
        passConfirm.classList.add("password-mismatch");
        return false; // Prevent form submission
    }

    pwdMatch.textContent = "Passwords match";
    password.classList.remove("password-mismatch");
    passConfirm.classList.remove("password-mismatch");
    return true; // Allow form submission
}