// Handling T-shirt selection and passing data to customization page
document.getElementById('customizeButton').addEventListener('click', function () {
    const color = document.getElementById('color').value;
    const gsm = document.getElementById('gsm').value;
    const type = document.getElementById('type').value;

    // Store the selections in localStorage
    localStorage.setItem('tshirt-color', color);
    localStorage.setItem('tshirt-gsm', gsm);
    localStorage.setItem('tshirt-type', type);

    // Redirect to the customize page
    window.location.href = 'customize.html';
});
