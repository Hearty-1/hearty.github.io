document.querySelector('.candle').addEventListener('click', function() {
  // Play the birthday song
  document.getElementById('birthdaySong').play();

  // Hide the candle
  this.style.display = 'none';

  // Show the message
  const message = document.querySelector('.message');
  message.style.display = 'block';

  // Trigger the confetti effect! 🎉
  confetti({
    particleCount: 100, // Number of confetti pieces
    spread: 70, // How wide the confetti shoots
    origin: { y: 0.6 } // Where the confetti comes from (vertical position)
  });
});
