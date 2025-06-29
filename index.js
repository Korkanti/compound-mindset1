// Allow any username/password
document.getElementById("signin-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username !== "" && password !== "") {
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("username", username);
    window.location.href = "home.html";
  } else {
    alert("Please enter both username and password.");
  }
});

function handleGoogleLogin(response) {
  const userData = jwt_decode(response.credential);
  sessionStorage.setItem("loggedIn", "true");
  sessionStorage.setItem("username", userData.name || "GoogleUser");
  window.location.href = "home.html";
}
