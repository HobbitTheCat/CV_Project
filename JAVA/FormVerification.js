function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
        const back = document.getElementById('email');
        back.style.backgroundColor = "#fb4934";
        alert("не правильно введен email")
        return false;
    }
    else{
        const back = document.getElementById('email');
        back.style.backgroundColor = "#b8bb26";
        return true;
    }
}

function clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    const back = document.getElementById('email');
    back.style.backgroundColor = "inintial"
}