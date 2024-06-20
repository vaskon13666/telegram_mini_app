// Initialize the counter variable
let clickCount = 0;

// Function to create a floating +1 element
function createFloatingPlusOne() {
    // Increment the click counter
    clickCount++;
    
    // Update the counter display
    document.getElementById('counter').innerText = `Total Clicks: ${clickCount}`;
    
    // Create a new +1 element
    const plusOne = document.createElement('div');
    plusOne.innerText = '+1';
    plusOne.className = 'floating';

    // Get button position and set the +1 position
    const button = document.getElementById('circle-button');
    const rect = button.getBoundingClientRect();
    plusOne.style.left = `${rect.left + rect.width / 2}px`;
    plusOne.style.top = `${rect.top}px`;

    // Append to the floating container
    document.getElementById('floating-container').appendChild(plusOne);

    // Remove the element after animation ends
    plusOne.addEventListener('animationend', () => {
        plusOne.remove();
    });

    // Add pulsing effect to the button
    button.classList.add('pulsing');

    // Remove the pulsing effect after the animation
    button.addEventListener('animationend', () => {
        button.classList.remove('pulsing');
    }, { once: true });

    // Add the class to hide the gradient border
    button.classList.add('clicked');
}

// Function to show a pop-up message
function showPopupMessage() {
    alert('Спасибо что не расскажите об этом никому');
}

// Add event listener to the buttons
document.getElementById('circle-button').addEventListener('click', createFloatingPlusOne);
document.getElementById('no-friends-button').addEventListener('click', showPopupMessage);
