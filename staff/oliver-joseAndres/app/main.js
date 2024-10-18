let usuarios = [];
let logged = -1;
let welcomeSection = document.querySelector("#welcome");
let loginSection = document.querySelector("#login");
let registerSection = document.querySelector("#register");
let homeSection = document.querySelector("#home");
function openLogin() {
  welcomeSection.classList.add("invisible");
  loginSection.classList.remove("invisible");
}
function openRegister() {
  welcomeSection.classList.add("invisible");
  registerSection.classList.remove("invisible");
}
function login() {
  let loginValidity = document.querySelector("#loginForm").checkValidity();
  if (!loginValidity) return;
  let username = document.querySelector("#usernameLogin").value;
  let pass = document.querySelector("#passwordLogin").value;
  let to_login = -1;
  usuarios.forEach((element) => {
    if (element.username == username && element.password == pass) {
      to_login = usuarios.indexOf(element);
      return;
    }
  });
  if (to_login == -1) {
    logged = -1;
    document.querySelector("#errorLogin").classList.remove("invisible");
    back("login");
  } else {
    logged = to_login;
    loginSection.classList.add("invisible");
    document.querySelector("#nombre").innerHTML = usuarios[to_login].name;
    homeSection.classList.remove("invisible");
  }
  console.log(to_login);
}
function register() {
  let registerValidity = document
    .querySelector("#registerForm")
    .checkValidity();
  if (!registerValidity) return;
  let username = document.querySelector("#usernameRegister").value;
  let email = document.querySelector("#email").value;
  let name = document.querySelector("#name").value;
  let pass = document.querySelector("#passwordRegister").value;

  let user = { email: email, username: username, password: pass, name: name };
  let registrar = true;
  usuarios.forEach((element) => {
    if (element.email == user.email) {
      registrar = false;
      return;
    }
  });
  if (registrar == true) {
    usuarios.push(user);
    document.querySelector("#successRegister").classList.remove("invisible");
    back("register");
  } else {
    document.querySelector("#errorRegister").classList.remove("invisible");
    back("register");
  }
  console.log(usuarios);
}
function logout() {
  logged = -1;
  homeSection.classList.add("invisible");
  welcomeSection.classList.remove("invisible");
}
function back(from) {
  welcomeSection.classList.remove("invisible");
  switch (from) {
    case "login":
      loginSection.classList.add("invisible");
      break;
    case "register":
      registerSection.classList.add("invisible");
      break;
    default:
      console.log("there was an error selecting origin");
  }
}
