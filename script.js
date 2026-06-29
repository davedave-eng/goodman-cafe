// LOGIN PAGE
const loginForm = document.getElementById("loginForm");

if(loginForm){
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();

        const username =
            document.getElementById("loginName").value;

        const result =
            document.getElementById("loginResult");

        result.classList.remove("d-none");
        result.innerHTML =
            `Welcome, <strong>${username}</strong>! Login successful.`;
    });
}


// ORDER PAGE
// ORDER PAGE
const orderForm = document.getElementById("orderForm");

if (orderForm) {

    orderForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const customer = document.getElementById("customerName").value;
        const product = document.getElementById("product").value;
        const quantity = document.getElementById("quantity").value;

        const result = document.getElementById("orderResult");

        result.classList.remove("d-none");

        result.innerHTML =
        `Thank you <strong>${customer}</strong>!<br>
        Your order for <strong>${quantity}</strong> ${product}(s) has been submitted successfully!`;

        // Clears ALL fields in the form
        orderForm.reset();

    });

}


// FEEDBACK PAGE
// FEEDBACK PAGE
const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {

    feedbackForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("feedbackName").value;

        const result = document.getElementById("feedbackResult");

        result.classList.remove("d-none");

        result.innerHTML =
        `Thank you for your feedback, <strong>${name}</strong>!`;

        // Clears every textbox, dropdown, and textarea
        feedbackForm.reset();

    });

}