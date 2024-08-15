// // document.getElementById("contactForm").addEventListener("submit", function (e) {
// //   e.preventDefault();

// //   // Clear previous messages
// //   const formMessages = document.getElementById("form-messages");
// //   formMessages.innerHTML = "";

// //   // Get form values
// //   const firstName = document.getElementById("firstName").value.trim();
// //   const lastName = document.getElementById("lastName").value.trim();
// //   const email = document.getElementById("email").value.trim();
// //   const message = document.getElementById("message").value.trim();
// //   const consent = document.getElementById("consent").checked;
// //   const enquiry = document.querySelector('input[name="enquiry"]:checked');

// //   // Validate form
// //   if (!firstName || !lastName || !email || !message || !enquiry || !consent) {
// //     formMessages.innerHTML =
// //       '<div id="error-message">Please fill in all required fields.</div>';
// //     return;
// //   }

// //   // Validate email format
// //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //   if (!emailPattern.test(email)) {
// //     formMessages.innerHTML =
// //       '<div id="error-message">Please enter a valid email address.</div>';
// //     return;
// //   }

// //   // Show success message
// //   formMessages.innerHTML =
// //     '<div id="success-message">Form submitted successfully!</div>';

// //   // Clear form fields
// //   document.getElementById("contactForm").reset();
// // });
// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   // Clear previous messages
//   const formMessages = document.getElementById("form-messages");
//   formMessages.innerHTML = "";

//   // Get form values
//   const firstName = document.getElementById("firstName").value.trim();
//   const lastName = document.getElementById("lastName").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const message = document.getElementById("message").value.trim();
//   const consent = document.getElementById("consent").checked;
//   const enquiry = document.querySelector('input[name="enquiry"]:checked');

//   // Validate form
//   if (!firstName || !lastName || !email || !message || !enquiry || !consent) {
//     formMessages.innerHTML =
//       '<div id="error-message">Please fill in all required fields.</div>';
//     return;
//   }

//   // Validate email format
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(email)) {
//     formMessages.innerHTML =
//       '<div id="error-message">Please enter a valid email address.</div>';
//     return;
//   }

//   // Show success message
//   formMessages.innerHTML =
//     '<div id="success-message">Form submitted successfully!</div>';

//   // Hide the success message after a few seconds (optional)
//   setTimeout(() => {
//     formMessages.innerHTML = "";
//   }, 3000);

//   // Clear form fields
//   document.getElementById("contactForm").reset();
// });
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous messages
  const formMessages = document.getElementById("form-messages");
  formMessages.innerHTML = "";

  // Get form values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("consent").checked;
  const enquiry = document.querySelector('input[name="enquiry"]:checked');

  // Validate form
  if (!firstName || !lastName || !email || !message || !enquiry || !consent) {
    formMessages.innerHTML =
      '<div id="error-message">Please fill in all required fields.</div>';
    return;
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessages.innerHTML =
      '<div id="error-message">Please enter a valid email address.</div>';
    return;
  }

  // Show success message
  formMessages.innerHTML =
    '<div id="success-message">Form submitted successfully!</div>';

  // Clear form fields
  document.getElementById("contactForm").reset();

  // Show the modal
  const modal = document.getElementById("successModal");
  modal.style.display = "block";

  // Close the modal when the user clicks the close button
  document.querySelector(".close-btn").onclick = function () {
    modal.style.display = "none";
  };

  // Close the modal when the user clicks outside of it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
