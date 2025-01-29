document.addEventListener('DOMContentLoaded', function () {
  // Initialize AOS
  AOS.init({
      duration: 1000,
      once: true,
      offset: 100
  });

  // Handle Dark Mode Toggle
  const iframe = document.getElementById("toggle-iframe");
  const body = document.querySelector("body");
  const iframeContentDocument = iframe.contentDocument;
  const navBar = document.querySelector(".navbar.navbar-expand-lg.navbar-light");
  const darkToggleMode = iframeContentDocument.getElementById("darkmode-toggle");

  // Apply dark mode if it's stored in localStorage
  if (localStorage.getItem("dark-mode") === "true") {
      body.classList.add("dark-mode");
      darkToggleMode.checked = true;
      navBar.classList.remove("navbar-light");
      navBar.classList.add("navbar-dark");
  }

  // Add event listener to toggle dark mode
  darkToggleMode.addEventListener("click", function (event) {
      if (event.target.checked) {
          body.classList.add("dark-mode");
          localStorage.setItem("dark-mode", true);
          navBar.classList.remove("navbar-light");
          navBar.classList.add("navbar-dark");
      } else {
          body.classList.remove("dark-mode");
          localStorage.setItem("dark-mode", false);
          navBar.classList.add("navbar-light");
          navBar.classList.remove("navbar-dark");
      }
  });

  // Back to Top button functionality
  window.onscroll = function () {
      scrollFunction();
  };

  function scrollFunction() {
      var backToTopButton = document.getElementById("back-to-top");

      if (backToTopButton) {  // Ensure the button exists before attempting to modify its style
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              backToTopButton.style.display = "block";
          } else {
              backToTopButton.style.display = "none";
          }
      } else {
          console.warn('Back to Top button not found');
      }
  }

  // Handle Back to Top button click
  const backToTopButton = document.getElementById("back-to-top");
  if (backToTopButton) {
      backToTopButton.onclick = function () {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
      };
  } else {
      console.warn('Back to Top button not found');
  }
});
