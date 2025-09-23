document.querySelector('.candle').addEventListener('click', function() {
    // Play the birthday song
    document.getElementById('birthdaySong').play();
    
    // Hide the candle
    this.style.display = 'none';

    // Show the message
    const message = document.querySelector('.message');
    message.style.display = 'block';
});