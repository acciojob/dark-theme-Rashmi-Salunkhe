function swapTheme() {
  const app = document.getElementById('app'); // Main element
  const swapButton = document.getElementById('swap');

  // Check the current class
  console.log('Current class:', app.classList);

  // Toggle the class between day and night for the main element
  if (app.classList.contains('day')) {
    app.classList.remove('day');
    app.classList.add('night');
    console.log('Switched to night theme'); // Debug log

    // Update button class and text for night mode
    swapButton.classList.remove('button_day');
    swapButton.classList.add('button_night');
    swapButton.textContent = 'Switch to Day Mode';
  } else {
    app.classList.remove('night');
    app.classList.add('day');
    console.log('Switched to day theme'); // Debug log

    // Update button class and text for day mode
    swapButton.classList.remove('button_night');
    swapButton.classList.add('button_day');
    swapButton.textContent = 'Switch to Night Mode';
  }

  console.log('New class:', app.classList); // Log to check final class
}

// Add event listener to the swap button
document.getElementById('swap').addEventListener('click', swapTheme);
