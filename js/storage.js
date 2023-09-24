document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-form_login").addEventListener("submit", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Usuario y contraseña guardados en localStorage.");
        document.getElementById("storedUsername").textContent = username;
        document.getElementById("storedPassword").textContent = password;
    });

    document.getElementById("deleteButton").onclick = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("password");

        document.getElementById("storedUsername").textContent = "";
        document.getElementById("storedPassword").textContent = "";

        alert("Datos borrados de localStorage.");
    };
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername.length > 0 && storedPassword.length > 0) {
        document.getElementById("storedUsername").textContent = storedUsername;
        document.getElementById("storedPassword").textContent = storedPassword;
    }
});