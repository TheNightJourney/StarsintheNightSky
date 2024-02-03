function startCelebration() {
    // Add the fade-out class to the body
    document.body.classList.add('fade-out');

    // Wait for the transition to finish
    document.body.addEventListener('transitionend', () => {
        // Change the background color
        document.body.style.backgroundColor = '#ffcc00';

        // Wait for a short delay (e.g., 100 milliseconds)
        setTimeout(() => {
            // Go to the new page
            window.location = 'mainpg.html';
        }, 1000);
    });
}

