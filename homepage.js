import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import {
  getFirestore,
  getDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCMsooqeZWAcpkhrqYX4Br-KZLaGT9F4qw",
  authDomain: "collegehubsignup.firebaseapp.com",
  projectId: "collegehubsignup",
  storageBucket: "collegehubsignup.firebasestorage.app",
  messagingSenderId: "310865169825",
  appId: "1:310865169825:web:9d1458ff6703ed4a9acfe0",
  measurementId: "G-2ZF827H5QX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, (user) => {
  const loggedInUserId = localStorage.getItem("loggedInUserId");
  if (loggedInUserId) {
    console.log(user);
    const docRef = doc(db, "users", loggedInUserId);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const userData = docSnap.data();
          console.log("User Data: ", userData);
          document.getElementById("loggedUserFName").innerText =
            userData.fullName;
          document.getElementById("loggedUserEmail").innerText = userData.email;
          document.getElementById("loggedUserStream").innerText =
            userData.stream;
          document.getElementById("login-m").classList.add("none");
          document.getElementById("sign-m").classList.add("none");
          document.getElementById("login-d").classList.add("none");
          document.getElementById("logout-m").classList.remove("none");
          document.getElementById("logout-d").classList.remove("none");
          document.getElementById("datashow").classList.remove("none");
          document.getElementById("login").classList.add("none");
          document.getElementById("login-msg").innerText = ("Thanks For Login !")
        } else {
          console.log("no document found matching id");
        }
      })
      .catch((error) => {
        console.log("Error getting document");
      });
  } else {
    console.log("User Id not Found in Local storage");
  }
});

const logoutButton = document.getElementById("logout");

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("loggedInUserId");
  signOut(auth)
    .then(() => {
      window.location.href = "index.html";
      document.getElementById("login-m").classList.remove("none");
      document.getElementById("sign-m").classList.remove("none");
      document.getElementById("login-d").classList.remove("none");
      document.getElementById("logout-m").classList.add("none");
      document.getElementById("logout-d").classList.add("none");
      document.getElementById("datashow").classList.add("none");
      document.getElementById("login").classList.remove("none");
    })
    .catch((error) => {
      console.error("Error Signing out:", error);
    });
});

const logoutButton2 = document.getElementById("logout-m");

logoutButton2.addEventListener("click", () => {
  localStorage.removeItem("loggedInUserId");
  signOut(auth)
    .then(() => {
      window.location.href = "index.html";
      document.getElementById("logout-m").classList.add("none");
      document.getElementById("login-m").classList.remove("none");
      document.getElementById("sign-m").classList.remove("none");
      document.getElementById("login-d").classList.remove("none");
      document.getElementById("logout-d").classList.add("none");
      document.getElementById("datashow").classList.add("none");
      document.getElementById("login").classList.remove("none");
    })
    .catch((error) => {
      console.error("Error Signing out:", error);
    });
});

const logoutButtond = document.getElementById("logout-d");

logoutButtond.addEventListener("click", () => {
  localStorage.removeItem("loggedInUserId");
  signOut(auth)
    .then(() => {
      window.location.href = "index.html";
      document.getElementById("logout-m").classList.add("none");
      document.getElementById("login-m").classList.remove("none");
      document.getElementById("sign-m").classList.remove("none");
      document.getElementById("login-d").classList.remove("none");
      document.getElementById("logout-d").classList.add("none");
      document.getElementById("login").classList.remove("none");
      document.getElementById("datashow").classList.add("none");
    })
    .catch((error) => {
      console.error("Error Signing out:", error);
    });
});
