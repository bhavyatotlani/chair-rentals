let inventory = {
    "Aeron Chair - Used": 3 // Example: 3 available
};

function openBooking(chairName) {
    let bookingForm = `
        <div id="booking-modal" style="position: fixed; top: 20%; left: 50%; transform: translateX(-50%); background: white; padding: 20px; border: 1px solid #ddd;">
            <h3>Rent ${chairName}</h3>
            <label>Start Date: <input type="date" id="start-date"></label><br>
            <label>End Date: <input type="date" id="end-date"></label><br>
            <button onclick="checkAvailability('${chairName}')">Check Availability</button>
            <button onclick="closeBooking()">Cancel</button>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', bookingForm);
}

function checkAvailability(chairName) {
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    
    if (inventory[chairName] > 0) {
        alert(`${chairName} is available! Proceed to payment.`);
        // Later, integrate payment here
    } else {
        alert(`Sorry, ${chairName} is unavailable for those dates.`);
    }
}

function closeBooking() {
    let modal = document.getElementById('booking-modal');
    if (modal) modal.remove();
}