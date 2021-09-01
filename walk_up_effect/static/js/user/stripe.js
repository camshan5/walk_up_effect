fetch("/donate/config/") // url endpoint that references a view calling the stripe public key
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    // noinspection JSUnresolvedFunction
    let stripe = Stripe(data.publicKey);

    console.log(`Stripe lib: ${stripe}`);

    // Create an instance of Elements.
    const elements = stripe.elements();

    // Custom styling can be passed to options when creating an Element.
    // (Note that this demo uses a wider set of styles than the guide below.)
    const style = {
      base: {
        color: "#1e273e", // gray-900
        fontSmoothing: "antialiased",
        fontSize: "15px",
        fontWeight: "400",
        fontFamily: "Inter",
        "::placeholder": {
          color: "#7d92b7", // gray-600
          fontWeight: "500",
          fontSize: "16px",
        },
      },
      invalid: {
        color: "#fb8261", // warning
        iconColor: "#fb8261",
      },
    };

    // Create an instance of the card Element.
    const card = elements.create("card", { style: style });

    // Add an instance of the card Element into the `card-element` <div>.
    card.mount("#card-element");

    // Handle real-time validation errors from the card Element.
    card.addEventListener("change", function (event) {
      const displayError = document.getElementById("card-errors");
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = "";
      }
    });

    // Handle form submission.
    const form = document.getElementById("payment-form");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // noinspection JSUnresolvedFunction
      stripe.createToken(card).then(function (result) {
        if (result.error) {
          // Inform the user if there was an error.
          const errorElement = document.getElementById("card-errors");
          errorElement.textContent = result.error.message;
        } else {
          // Send the token to your server.
          stripeTokenHandler(result.token);
        }
      });
    });

    // Submit the form with the token ID.
    function stripeTokenHandler(token) {
      // Insert the token ID into the form so it gets submitted to the server
      const form = document.getElementById("payment-form");
      const hiddenInput = document.createElement("input");

      hiddenInput.setAttribute("type", "hidden");
      hiddenInput.setAttribute("name", "stripeToken");
      hiddenInput.setAttribute("value", token.id);
      form.appendChild(hiddenInput);

      // Submit the form
      form.submit();
    }
  });
