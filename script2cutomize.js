// Rendering the selected T-shirt attributes on the customization page
document.addEventListener('DOMContentLoaded', function() {
    const color = localStorage.getItem('tshirt-color');
    const gsm = localStorage.getItem('tshirt-gsm');
    const type = localStorage.getItem('tshirt-type');

    // Set the T-shirt color as the canvas background
    document.getElementById('tshirtCanvas').style.backgroundColor = color;

    // Display selected attributes
    document.getElementById('tshirt-attributes').innerHTML = `
        Color: ${color}, GSM: ${gsm}, Type: ${type}
    `;
});

// Create the canvas for T-shirt design
var canvas = new fabric.Canvas('tshirtCanvas');

// Allow users to upload and add their design to the T-shirt
document.getElementById('uploadButton').addEventListener('click', function() {
    var input = document.getElementById('uploadDesign');
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            fabric.Image.fromURL(e.target.result, function(img) {
                img.scale(0.5);  // Adjust the scale
                canvas.add(img); // Add the image to the canvas
                img.set({ selectable: true });  // Allow moving and resizing
            });
        };
        reader.readAsDataURL(input.files[0]);
    }
});
