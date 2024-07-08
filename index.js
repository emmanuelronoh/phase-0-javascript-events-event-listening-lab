
function addingEventListener() {
    const button = document.getElementById('button');
    button.addEventListener('click', function() {
        // Example: Change text content of main element on button click
        const mainElement = document.getElementById('main');
        mainElement.textContent = 'Button clicked!';
    });
}

// Execute addingEventListener() function when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    addingEventListener();
});
