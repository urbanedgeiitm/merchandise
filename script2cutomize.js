// Initialize Fabric.js canvas
var canvas = new fabric.Canvas('tshirtCanvas');

// Handle the design upload and placement
document.getElementById('uploadButton').addEventListener('click', function () {
    var input = document.getElementById('uploadDesign');
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            // Load the uploaded image on the canvas
            fabric.Image.fromURL(e.target.result, function (img) {
                img.scale(0.5); // Resize the image
                canvas.add(img); // Add image to the canvas
            });
        };
        reader.readAsDataURL(input.files[0]);
    }
});

// Proceed to checkout button functionality
document.getElementById('checkoutButton').addEventListener('click', function () {
    // Store the customization (image and T-shirt details) in local storage
    var canvasData = canvas.toDataURL();
    localStorage.setItem('tshirt-customization', canvasData);

    // Redirect to checkout page
    window.location.href = 'checkout.html';
});
