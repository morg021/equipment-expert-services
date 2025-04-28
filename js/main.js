// // Wait for the form submission
// document.querySelector("form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the default form submission (refresh behavior)
    
//     // Show the thank you message
//     document.getElementById("thankYouMessage").style.display = "block";
    
//     // Create a new FormData object from the form
//     const formData = new FormData(this);
    
//     // Use fetch to submit the form data to Formspree asynchronously
//     fetch(this.action, {
//         method: this.method,
//         body: formData,
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Handle successful submission
//         console.log("Form submitted successfully:", data);
//     })
//     .catch(error => {
//         // Handle errors during form submission
//         console.error("Error submitting form:", error);
//     });

//     // Optionally, reset the form after submission (this clears the input fields)
//     this.reset();
// });




document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop the form from submitting normally
    
    // Show thank you message
    document.getElementById("thankYouMessage").style.display = "block";

    // Prepare the form data
    const formData = new FormData(this);

    // Send the form data using fetch
    fetch(this.action, {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Formspree received it successfully
            this.reset(); // Clear the form fields

            // Wait 5 seconds, then refresh the page
            setTimeout(function() {
                location.reload();
            }, 5000);
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Oops! There was a problem submitting your form.");
    });
});

// script.js
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const date = now.toLocaleDateString('en-US', options);
    const time = now.toLocaleTimeString('en-US');
  
    // Update the content in the time-date div
    document.getElementById('date-time').textContent = `${date}, ${time}`;
  }
  
  // Update time and date every second
  setInterval(updateDateTime, 1000);
  updateDateTime(); // Initial call to set the time/date immediately
  