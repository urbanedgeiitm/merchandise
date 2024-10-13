document.getElementById('customizeButton').addEventListener('click', function () {
    // Gather the selected T-shirt options
    const color = document.getElementById('color').value;
    const gsm = document.getElementById('gsm').value;
    const type = document.getElementById('type').value;

    // Save selected options to localStorage (to pass data to customization page)
    localStorage.setItem('tshirt-color', color);
    localStorage.setItem('tshirt-gsm', gsm);
    localStorage.setItem('tshirt-type', type);

    // Redirect to the customization page
    window.location.href = 'customize.html';
});
