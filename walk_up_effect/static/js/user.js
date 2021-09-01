//
// user.js
// Use this to write your custom JS
//

import swal from "sweetalert";

// Function to handle alerts on a successful copy to clipboard action

document.getElementById("copyBtn").onclick = () => {
  let text = document.getElementById("textId").value;
  navigator.clipboard
    .writeText(text.trim())
    .then(() => {
      swal({
        title: "Success!",
        text:
          "A message to send to your friends and family has now been copied! Now you paste it into a text, email, or social media! Thank you! ",
        icon: "success",
      });
    })
    .catch((err) => {
      swal(
        {
          title: "Something went wrong!",
          text: "There has been an error in copying the message.",
          icon: "error",
        },
        err
      );
    });
};

// Function to handle alerts on form submission

let form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();

  let data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      swal({
        title: "Thanks!",
        text:
          "Your information has been submitted to the Walk Up team. Someone will be in touch with you shortly.",
        icon: "success",
      });
      form.reset();
    })
    .catch((error) => {
      swal(
        {
          title: "Something went wrong!",
          text: "Make sure you fill out the entire form before submitting.",
          icon: "error",
        },
        error
      );
    });
}
form.addEventListener("submit", handleSubmit);
