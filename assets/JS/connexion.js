function valid() {
  let username = document.getElementById("login").value;
  let password = document.getElementById("password").value;
  if (username == "Miguel_Paul" && password == "1230") {
    window.location = "accueil.html";
    return false;
  } else {
    alert("identifiant et mot de passe incorrect");
  }
}

function passwordVisible() {
  let visible = document.getElementById("password");
  if (visible.type == "password") {
    visible.type = "text";
  } else {
    visible.type = "password";
  }
}

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
