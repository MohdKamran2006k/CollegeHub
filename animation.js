   const textElement = document.querySelector('.text');
    const words = ["Welcome To", "College Hub", "By:- Mohd.Kamran"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentWord = words[wordIndex];
      const visibleText = currentWord.slice(0, charIndex);

      textElement.textContent = visibleText;

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 80);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 1000);
      }
    }
    type();