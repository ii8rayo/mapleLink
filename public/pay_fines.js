document.getElementById('fine-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate and Show Fine Details
    const ticketNumber = document.getElementById('ticket-number').value.trim();
    const licensePlate = document.getElementById('license-plate').value.trim();

    if (ticketNumber && licensePlate) {
        document.getElementById('ticket').textContent = ticketNumber;
        document.getElementById('plate').textContent = licensePlate;

        // Display Fine Details
        document.getElementById('fine-details').classList.remove('hidden');
    } else {
        alert('Please enter both the ticket number and license plate.');
    }
});
