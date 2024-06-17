// JavaScript for login functionality
function goToHomePage() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
}

// JavaScript for starting the voting process
function startVoting() {
    // Display the form-like div for collecting election details
    var formDiv = document.createElement('div');
    formDiv.innerHTML = `
        <div id="voting-form" class="voting-form" style="padding: 20px; background-color: #f0f0f0;">
            <h2 style="margin-bottom: 10px;">Create Election</h2>
            <label for="election-name" style="display: block; margin-bottom: 5px;">Election Name:</label>
            <input type="text" id="election-name" name="election-name" required style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ccc; margin-bottom: 10px;">
            <label for="election-reason" style="display: block; margin-bottom: 5px;">Reason for Election:</label>
            <textarea id="election-reason" name="election-reason" rows="4" required style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ccc; margin-bottom: 10px;"></textarea>
            <label for="contestants" style="display: block; margin-bottom: 5px;">Contestants:</label>
            <textarea id="contestants" name="contestants" rows="4" required style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ccc; margin-bottom: 10px;"></textarea>
            <button onclick="submitElection()" style="padding: 10px 20px; background-color: #007bff; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Submit</button>
        </div>
    `;
    document.body.appendChild(formDiv);
}

// JavaScript for submitting the election details
function submitElection() {
    // You can add functionality here to collect and submit election details to the backend
    // For demonstration purposes, let's log the entered details to the console
    var electionName = document.getElementById('election-name').value;
    var electionReason = document.getElementById('election-reason').value;
    var contestants = document.getElementById('contestants').value;

    console.log("Election Name:", electionName);
    console.log("Reason for Election:", electionReason);
    console.log("Contestants:", contestants);

    // Once the details are submitted, you can hide or remove the form div
    var formDiv = document.getElementById('voting-form');
    formDiv.style.display = 'none';
}