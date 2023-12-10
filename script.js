function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Simple validation (you should use stronger validation and authentication in a real scenario)
    if (username === "user" && password === "pass") {
        // Successful login, redirect to another page
        alert("Та амжилттай нэвтэрлээ!");
        window.location.href = "file:///C:/Users/Uyangaa/Downloads/tutorial-38/38.%20Bootstrap%202020%20Starter%20Files/index.html"; // Replace "success.html" with the desired page
    } else {
        // Display an error message
        errorMessage.textContent = "Хэрэглэгчийн нэр эсвэл нууц үг буруу байна. Дахин оролдоно уу..";
    }
}
