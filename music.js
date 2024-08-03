document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playButton = document.getElementById('playButton');
    const musicInfo = document.getElementById('musicInfo');

    playButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playButton.textContent = 'Play';
        }
    });

    // Optionally, you could update musicInfo dynamically
    // For example, changing the text based on the current time or track
});