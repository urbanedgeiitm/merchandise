// Initialize Fabric.js canvas
var canvas = new fabric.Canvas('tshirtCanvas');

// Load a basic T-shirt outline as the background (ensure this path is correct)
fabric.Image.fromURL('images/tshirt.png', function(img) {
    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleX: canvas.width / img.width,
        scaleY: canvas.height / img.height
    });
});

// Handle the image upload for customizing
document.getElementById('uploadButton').addEventListener('click', function () {
    var input = document.getElementById('uploadDesign');
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            fabric.Image.fromURL(e.target.result, function (img) {
                img.scale(0.5);  // Adjust the scale as needed
                canvas.add(img);  // Add the design to the canvas
            });
        };
        reader.readAsDataURL(input.files[0]);
    }
});

// Proceed to checkout
document.getElementById('checkoutButton').addEventListener('click', function () {
    // Save the current customization (image on the T-shirt) in local storage
    var canvasData = canvas.toDataURL();
    localStorage.setItem('tshirt-customization', canvasData);

    // Redirect to checkout page
    window.location.href = 'checkout.html';
});
