document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input");
  const textarea = form.querySelector("textarea");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const firstName = inputs[0].value.trim();
    const lastName = inputs[1].value.trim();
    const email = inputs[2].value.trim();
    const phone = inputs[3].value.trim();
    const message = textarea.value.trim();

    let errors = [];
    if (firstName === "" || firstName.length < 2) {
      errors.push("First Name must be at least 2 characters.");
    }
    if (lastName === "" || lastName.length < 1) {
      errors.push("Last Name must be at least 2 characters.");
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errors.push("Please enter a valid email address.");
    }
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      errors.push("Phone number must be exactly 10 digits.");
    }
    if (message === "" || message.length < 10) {
      errors.push("Message must be at least 10 characters.");
    }

    if (errors.length > 0) {
      alert("Please fix the following errors:\n\n" + errors.join("\n"));
    } else {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});
