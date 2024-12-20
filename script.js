// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
// Open the modal
function openContactModal() {
  document.getElementById("contact-modal").style.display = "block";
}

// Close the modal
function closeContactModal() {
  document.getElementById("contact-modal").style.display = "none";
}

// Close the modal if clicked outside the modal content
window.onclick = function (event) {
  var modal = document.getElementById("contact-modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

