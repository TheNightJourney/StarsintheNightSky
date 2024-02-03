document.addEventListener("DOMContentLoaded", function () {
    var mailImageContainer = document.querySelector('.mail-image');
    var mailImage1 = document.getElementById('mail1');
    var mailImage2 = document.getElementById('mail2');
    var mailImage3 = document.getElementById('mail3');
    var clickEnabled = true;

    // Add an event listener for the click event on the body
    document.body.addEventListener('click', function () {
        // Check if click is enabled
        if (clickEnabled) {
            // Toggle between mail1, mail2, and mail3 visibility
            if (mailImage1.style.display === 'block') {
                // If mailImage1 is visible, hide it and show mail2
                mailImage1.style.display = 'none';
                mailImage2.style.display = 'block';
                document.body.style.animation = 'fadeInBackground 3s ease-in-out forwards';
            } else if (mailImage2.style.display === 'block') {
                // If mailImage2 is visible, hide it and show mail3
                mailImage2.style.display = 'none';
                mailImage3.style.display = 'block';
            } else if (mailImage3.style.display === 'block'){
                window.location.href = "songpage.html";
            } else {
                // If mailImage3 is visible, reset to initial state (show mail1)
                mailImage3.style.display = 'none';
                mailImage1.style.display = 'block';
            }

            // Toggle the animation
            mailImageContainer.style.animation = 'fadeInMail 1s ease-in-out forwards';

            // Disable further clicks once mail3 is shown
        }
    });

    // Add an event listener for the 'keydown' event
    document.addEventListener('keydown', function (event) {
        // Check if the pressed key is the back arrow key (ArrowLeft)
        if (event.key === 'ArrowLeft') {
            // Toggle between mail2 and mail1 visibility when back arrow is pressed
            if (mailImage2.style.display === 'block') {
                mailImage2.style.display = 'none';
                mailImage1.style.display = 'block';
            } else if (mailImage3.style.display === 'block') {
                // Toggle between mail3 and mail2 visibility when back arrow is pressed
                mailImage3.style.display = 'none';
                mailImage2.style.display = 'block';
            }
        }
    });
});
