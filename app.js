function validatePassword() {
    let password = document.querySelector("#password").value;
    let passConfirm = document.querySelector("#pass-confirm").value;

    if (password !== passConfirm) {
        alert("Passwords do not match!");
        return false;
    }

    return true;
}