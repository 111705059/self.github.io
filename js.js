/*music*/
var audio = document.getElementById("myAudio");
var isPlaying = false;
function playPauseMusic() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        event.target.innerHTML = "Play Music";  // Change button text
    }
    else {
        audio.play();
        isPlaying = true;
        event.target.innerHTML = "Pause Music";  // Change button text
    }
}
/*vacation*/
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.vacation > div'); // Select both HK and Korea sections

    sections.forEach(section => {
        const markers = section.querySelectorAll('.marker');
        const images = section.querySelectorAll('.vacpic img');

        markers.forEach(marker => {
            marker.addEventListener('click', () => {
                // Remove active class from all markers and images in the current section
                markers.forEach(m => m.classList.remove('active'));
                images.forEach(img => img.classList.remove('active'));

                // Add active class to the clicked marker and corresponding image
                marker.classList.add('active');
                const index = marker.getAttribute('data-index');
                images[index].classList.add('active');
            });
        });
    });
});