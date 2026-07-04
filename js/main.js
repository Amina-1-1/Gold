
function validateForm() {
    var email = document.querySelector('input[name="email"]').value;
    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var confirm_password = document.querySelector('input[name="confirm_password"]').value;

    if (email == "" || username == "" || password == "" || confirm_password == "") {
    result.innerHTML = 'enter data.';
        return false;
    }
    else if (username.length < 3 || username.length > 15) {
        result.innerHTML = "enter 3-15 characters";
        return false;
    }
    else if (email.indexOf('@',1) == -1 || email.indexOf('.com') == -1) {
        result.innerHTML = "enter valid email";
        return false;
    }
    else if (password==""){
        result.innerHTML = "enter password";
        return false;
    }
    else if(password.length < 6 ) {
        result.innerHTML ="weak password";
return false;
    }
    if (password !== confirm_password) {
    result.innerHTML = 'Passwords do not match.';
        return false;
    }

    return true;
}