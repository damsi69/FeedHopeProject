function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var emailError = document.getElementById("emailError");

    // Check if email is in correct format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format";
        return;
    } else {
        emailError.textContent = "";
    }

    // Check if required fields are completed
    if (name === "" || message === "") {
        alert("Please fill in all required fields.");
        return;
    }

    // If all validations pass, submit the form
    document.getElementById("feedbackForm").submit();
}