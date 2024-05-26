document.addEventListener('DOMContentLoaded', function () {
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");

    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            loginForm.style.marginLeft = "-50%";
            loginText.style.marginLeft = "-50%";

            const signupForm = document.querySelector("form.signup");
            signupForm.querySelectorAll(".field").forEach(field => {
                field.style.display = "block";
            });
        });
    }

    if (loginBtn) {
        loginBtn.onclick = () => {
            loginForm.style.marginLeft = "0%";
            loginText.style.marginLeft = "0%";
        };
    }

    if (signupLink) {
        signupLink.onclick = () => {
            if (signupBtn) signupBtn.click();
            return false;
        };
    }
});

function savePost() {
    const bodyPost = getBodyPost();

    fetch("http://localhost:8080/users/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: bodyPost
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function getBodyPost() {
    const name = document.getElementById('name').value;
    const registrationNumber = document.getElementById('registrationNumber').value;
    const email = document.getElementById('email').value;
    const admin = document.getElementById('admin').value;
    const password = document.getElementById('password').value;

    // Logs de depuração
    console.log('Nome:', name);
    console.log('Sua matrícula:', registrationNumber);
    console.log('Email:', email);
    console.log('Admin:', admin);
    console.log('Senha:', password);

    return JSON.stringify({
        name: name,
        registrationNumber: registrationNumber,
        email: email,
        admin: admin,
        password: password
    });
}




