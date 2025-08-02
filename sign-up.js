const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// toggle eye
let eyeoff = document.getElementById("eyeoff");
let eyeon = document.getElementById("eyeon");
let visible = document.getElementById("password");
let eyeoff2 = document.getElementById("eyeoff-2");
let eyeon2 = document.getElementById("eyeon-2");
let visible2 = document.getElementById("rPassword");

eye = () => {
  eyeoff.addEventListener("click", () => {
    eyeoff.classList.add("none");
    eyeon.classList.remove("none");
    visible.type = "text";
  });

  eyeon.addEventListener("click", () => {
    eyeon.classList.add("none");
    eyeoff.classList.remove("none");
    visible.type = "password";
  });
};

eye2 = () => {
  eyeoff2.addEventListener("click", () => {
    eyeoff2.classList.add("none");
    eyeon2.classList.remove("none");
    visible2.type = "text";
  });

  eyeon2.addEventListener("click", () => {
    eyeon2.classList.add("none");
    eyeoff2.classList.remove("none");
    visible2.type = "password";
  });
};

eye();
eye2();

