let navham = document.getElementById("hamburger");
let navcross = document.getElementById("cross");
let mobilenav = document.getElementById("nav-none");
let loader = document.body.getElementsByClassName("loader");
let loaderdone = document.getElementById("looderdone");

// Click on hamburger

let navm = () => {
  navham.addEventListener("click", () => {
    navham.classList.add("none");
    mobilenav.classList.remove("none");
    console.log("bnt was click");
    navcross.classList.remove("none");
  });
};
navm();

// click on cross

let btncross = () => {
  navcross.addEventListener("click", () => {
    navcross.classList.add("none");
    navham.classList.remove("none");
    mobilenav.classList.add("none");
    console.log("bnt was click");
  });
};

btncross();

let dash = document.getElementById("dashboard");
let opendash = document.getElementById("opendash");
let dashm = document.getElementById("dashboard-m");

dash.addEventListener("click", () => {
  opendash.classList.toggle("none");
});

dashm.addEventListener("click", () => {
  opendash.classList.toggle("none");
});

let crossdash = document.getElementById("dash-cross");

crossdash.addEventListener("click", () => {
  opendash.classList.add("none");
});

// Service Worker Register
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then((reg) => {
      console.log("✅ Service Worker Registered", reg);
    })
    .catch((err) => {
      console.log("❌ Service Worker Failed", err);
    });
}

// Install Prompt Logic
let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "flex"; // show the button

  installBtn.addEventListener("click", () => {
    installBtn.style.display = "none";
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === "accepted") {
        console.log("✅ App Installed");
      } else {
        console.log("❌ User Dismissed Install");
      }
      deferredPrompt = null;
    });
  });
});
