//your code here

// Function to swap themes
function swapTheme() {
  const app = document.getElementById('app');
  const swapButton = document.getElementById('swap');
  
  // Toggle the class between day and night
  if (app.classList.contains('day')) {
    app.classList.remove('day');
    app.classList.add('night');
    
    // Update button class and text for night mode
    swapButton.classList.remove('button_day');
    swapButton.classList.add('button_night');
    swapButton.textContent = 'Switch to Day Mode';
  } else {
    app.classList.remove('night');
    app.classList.add('day');
    
    // Update button class and text for day mode
    swapButton.classList.remove('button_night');
    swapButton.classList.add('button_day');
    swapButton.textContent = 'Switch to Night Mode';
  }
}

// Add event listener to the swap button
document.getElementById('swap').addEventListener('click', swapTheme);
