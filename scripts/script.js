// Start and stop animation for the snake balls
function startAnimation() {
    document.getElementById('ball1').style.animationPlayState = 'running';
    document.getElementById('ball2').style.animationPlayState = 'running';
    document.getElementById('ball3').style.animationPlayState = 'running';
}

function stopAnimation() {
    document.getElementById('ball1').style.animationPlayState = 'paused';
    document.getElementById('ball2').style.animationPlayState = 'paused';
    document.getElementById('ball3').style.animationPlayState = 'paused';
}

// Ensures animation is running on page load
window.onload = function() {
    startAnimation();
};
