function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Simple validation (you should use stronger validation and authentication in a real scenario)
    if (username === "user" && password === "pass") {
        // Successful login, redirect to another page
        alert("Та амжилттай нэвтэрлээ!");
        window.location.href = "https://uyngga.github.io/Uynga/index.html"; // Replace "success.html" with the desired page
    } else {
        // Display an error message
        errorMessage.textContent = "Хэрэглэгчийн нэр эсвэл нууц үг буруу байна. Дахин оролдоно уу..";
    }
}
