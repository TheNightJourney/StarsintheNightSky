
function redirectToYouTube() {
    // Redirect to the first YouTube link in a new tab after a delay
    setTimeout(function () {
        window.open('https://www.youtube.com/watch?v=EpyfMrXT1Ww', '_blank');
        // Show the second button after the delay
        document.getElementById('secondButtonContainer').style.display = 'block';
    }, 10);
}

function redirectToAnotherYouTube() {
    // Redirect to the second YouTube link in a new tab when the second button is clicked
    window.open('https://www.youtube.com/watch?v=ZLR6d4hbjzU', '_blank');
}
