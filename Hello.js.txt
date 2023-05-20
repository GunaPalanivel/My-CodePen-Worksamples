// Toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

// Add motion picture effect
function addMotionPictureEffect() {
  const container = document.querySelector(".container");
  container.classList.add("motion-effect");
}

// Print "Hello, World!"
function printHelloWorld() {
  const output = document.getElementById("output");
  output.textContent = "Hello, World!";
}

// Call functions after the page loads
window.addEventListener("load", function() {
  toggleDarkMode();
  addMotionPictureEffect();
  printHelloWorld();
});
