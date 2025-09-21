document.addEventListener("DOMContentLoaded", () => {
  // Include header + all main sections
  const sections = document.querySelectorAll("header, main section");
  let currentIndex = 0;

  function scrollToNextSection() {
    sections[currentIndex].scrollIntoView({ behavior: "smooth" });
    currentIndex++;
    if (currentIndex >= sections.length) currentIndex = 0; // loop back to header
  }

  // Start by scrolling to header immediately
  scrollToNextSection();

  // Then scroll to next sections every 2 minutes
  setInterval(scrollToNextSection, 120000); // 2 minutes per section

  // Optional: Animate sections on scroll
  window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  });
});
