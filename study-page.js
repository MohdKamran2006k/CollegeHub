let study = document.getElementById("syllabus");
let books = document.getElementById("books");
let notes = document.getElementById("notes");
let pyqs = document.getElementById("pyqs");
let assignment = document.getElementById("assignment");
let syllabussection = document.getElementById("syllabus-section");
let bookssection = document.getElementById("books-section");
let notessection = document.getElementById("notes-section");
let pyqssection = document.getElementById("pyqs-section");
let assignmentssection = document.getElementById("assignment-section");

// main - logic Function
let studymain = () => {
  study.addEventListener("click", () => {
    study.classList.add("select-section-in");
    books.classList.remove("select-section-in");
    notes.classList.remove("select-section-in");
    pyqs.classList.remove("select-section-in");
    assignment.classList.remove("select-section-in");
    bookssection.classList.add("none");
    syllabussection.classList.remove("none");
    notessection.classList.add("none");
    pyqssection.classList.add("none");
    assignmentssection.classList.add("none");
  });

  books.addEventListener("click", () => {
    study.classList.remove("select-section-in");
    books.classList.add("select-section-in");
    notes.classList.remove("select-section-in");
    pyqs.classList.remove("select-section-in");
    assignment.classList.remove("select-section-in");
    bookssection.classList.remove("none");
    syllabussection.classList.add("none");
    notessection.classList.add("none");
    pyqssection.classList.add("none");
    assignmentssection.classList.add("none");
  });

  notes.addEventListener("click", () => {
    study.classList.remove("select-section-in");
    books.classList.remove("select-section-in");
    notes.classList.add("select-section-in");
    pyqs.classList.remove("select-section-in");
    assignment.classList.remove("select-section-in");
    bookssection.classList.add("none");
    syllabussection.classList.add("none");
    notessection.classList.remove("none");
    pyqssection.classList.add("none");
    pyqssection.classList.add("none");
    assignmentssection.classList.add("none");
  });

  pyqs.addEventListener("click", () => {
    study.classList.remove("select-section-in");
    books.classList.remove("select-section-in");
    notes.classList.remove("select-section-in");
    pyqs.classList.add("select-section-in");
    assignment.classList.remove("select-section-in");
    bookssection.classList.add("none");
    syllabussection.classList.add("none");
    notessection.classList.add("none");
    pyqssection.classList.remove("none");
    assignmentssection.classList.add("none");
  });

  assignment.addEventListener("click", () => {
    study.classList.remove("select-section-in");
    books.classList.remove("select-section-in");
    notes.classList.remove("select-section-in");
    pyqs.classList.remove("select-section-in");
    assignment.classList.add("select-section-in");
    bookssection.classList.add("none");
    syllabussection.classList.add("none");
    notessection.classList.add("none");
    pyqssection.classList.add("none");
    assignmentssection.classList.remove("none");
  });

};

studymain();

// // Stream section logic all master function
function handleAllStreamToggles() {
  document.querySelectorAll(".li-main").forEach((trigger) => {
    const streamKey = trigger.dataset.stream;
    const content = document.querySelector(
      `.li-after[data-stream="${streamKey}"]`
    );
    const openIcon = trigger.querySelector(".open-icon");
    const closeIcon = trigger.querySelector(".close-icon");

    if (content) {
      trigger.addEventListener("click", () => {
        content.classList.toggle("none");
        if (openIcon) openIcon.classList.toggle("none");
        if (closeIcon) closeIcon.classList.toggle("none");
      });
    }
  });
}

handleAllStreamToggles();

// semester handle all master function
function initSubjectSemesterToggles() {
  document.querySelectorAll(".subject-toggle").forEach((subjectEl) => {
    const subjectKey = subjectEl.dataset.subject;
    const semList = document.querySelector(
      `.ul.sem[data-subject="${subjectKey}"], ul.sem[data-subject="${subjectKey}"]`
    );
    const openIcon = subjectEl.querySelector(".open-icon");
    const closeIcon = subjectEl.querySelector(".close-icon");

    subjectEl.addEventListener("click", () => {
      if (semList) {
        semList.classList.toggle("none");
        openIcon?.classList.toggle("none");
        closeIcon?.classList.toggle("none");
      }
    });
  });
}
initSubjectSemesterToggles();
