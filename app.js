function validatePassword() {
    let password = document.querySelector("#password").value;
    let passConfirm = document.querySelector("#pass-confirm").value;
    let pwdMatch = document.querySelector("#pwd-match-msg");

    if (password !== passConfirm) {
        pwdMatch.textContent = "Passwords do not match!";
        return false;
    }
    pwdMatch.textContent = "Passwords match";
    return true;
}