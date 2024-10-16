document.getElementById('payButton').addEventListener('click', function(e) {
    e.preventDefault();

    // Collect shipping details
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    // Razorpay options for payment
    var options = {
        "key": "rzp_test_ibuaNsCnRcHdbx",  // Your Razorpay Test Key ID
        "amount": 50000,  // Amount in paise (50000 paise = INR 500)
        "currency": "INR",
        "name": "Custom T-shirts Store",
        "description": "T-shirt Purchase",
        "image": "https://yourlogo.com/logo.png",  // Optional: Add your store logo
        "handler": function (response) {
            alert("Payment successful. Payment ID: " + response.razorpay_payment_id);
            // You can save the payment details on the server here
        },
        "prefill": {
            "name": name,
            "email": email,
            "contact": phone
        },
        "theme": {
            "color": "#3399cc"
        }
    };

    // Open Razorpay Checkout
    var rzp1 = new Razorpay(options);
    rzp1.open();
});
