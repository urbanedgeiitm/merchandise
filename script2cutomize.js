// Fabric.js for the T-shirt design preview
var canvas = new fabric.Canvas('tshirtCanvas');

// Load a basic T-shirt outline as the background
fabric.Image.fromURL('path-to-your-tshirt-image.png', function(img) {
    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleX: canvas.width / img.width,
        scaleY: canvas.height / img.height
    });
});

// Upload and place design
document.getElementById('uploadButton').addEventListener('click', function() {
    var input = document.getElementById('uploadDesign');
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            fabric.Image.fromURL(e.target.result, function(img) {
                img.scale(0.5);
                canvas.add(img);
            });
        };
        reader.readAsDataURL(input.files[0]);
    }
});

// Proceed to checkout
document.getElementById('checkoutButton').addEventListener('click', function () {
    // Save current T-shirt customization state (optional)
    const dataURL = canvas.toDataURL();
    localStorage.setItem('tshirt-customization', dataURL);

    // Redirect to checkout page
    window.location.href = 'checkout.html';
});

// Rendering the selected T-shirt attributes on the customization page
document.addEventListener('DOMContentLoaded', function() {
    const color = localStorage.getItem('tshirt-color');
    const gsm = localStorage.getItem('tshirt-gsm');
    const type = localStorage.getItem('tshirt-type');

    document.getElementById('tshirt-preview').style.backgroundColor = color;

    // Display selected attributes
    document.getElementById('tshirt-attributes').innerHTML = `
        Color: ${color}, GSM: ${gsm}, Type: ${type}
    `;
});

// Handling image upload and placement on the T-shirt
var canvas = new fabric.Canvas('tshirtCanvas');

// Load T-shirt background (optional: add a base image of the T-shirt)
fabric.Image.fromURL('path-to-your-tshirt-image.png', function(img) {
    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleX: canvas.width / img.width,
        scaleY: canvas.height / img.height
    });
});

// Allow users to upload and add their design
document.getElementById('uploadButton').addEventListener('click', function() {
    var input = document.getElementById('uploadDesign');
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            fabric.Image.fromURL(e.target.result, function(img) {
                img.scale(0.5);  // Adjust the scale
                canvas.add(img);
                img.set({ selectable: true });  // Allow moving and resizing
            });
        };
        reader.readAsDataURL(input.files[0]);
    }
});

