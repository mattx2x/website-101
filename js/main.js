// Home page: button shows a message
const helloBtn = document.getElementById("hello-btn");
if (helloBtn) {
  helloBtn.addEventListener("click", () => {
    document.getElementById("message").textContent =
      "Hello! It is " + new Date().toLocaleTimeString();
  });
}

// Contact page: handle the form without a server
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    document.getElementById("form-result").textContent =
      "Thanks, " + name + "! (This form does not send anything yet.)";
    form.reset();
  });
}
