import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYh2TTkAfSTo06-cp7BNSZ_IojP94799E",
  authDomain: "collegehubforums.firebaseapp.com",
  databaseURL: "https://collegehubforums-default-rtdb.firebaseio.com",
  projectId: "collegehubforums",
  storageBucket: "collegehubforums.firebasestorage.app",
  messagingSenderId: "22156830717",
  appId: "1:22156830717:web:cd1fb8db4cbf0e62725b94",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("student-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    try {
      await addDoc(collection(db, "college_forms"), data);
      alert("✅ Form submitted successfully!");
      form.reset();
      window.location.href = "index.html";
    } catch (error) {
      console.error("❌ Error adding document: ", error);
      alert("Error submitting form.");
    }
  });
});

// Feedback forums
document.addEventListener("DOMContentLoaded", () => {
  const feedbackForm = document.getElementById("feedback-form");
  feedbackForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const feedbackData = Object.fromEntries(new FormData(feedbackForm));
    try {
      await addDoc(collection(db, "feedback"), feedbackData); // 👈 New collection
      alert("✅ Feedback submitted successfully!");
      feedbackForm.reset();
    } catch (error) {
      console.error("❌ Error submitting feedback: ", error);
      alert("Error sending feedback.");
    }
  });
});
