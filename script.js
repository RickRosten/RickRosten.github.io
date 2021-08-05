// управление музыкой 
let audio = document.querySelector('.audio-js')
let audioButton = document.querySelector('.audio-button')
let audioIcon = document.querySelector('.js-audio-logo')

audioButton.addEventListener('click', () => {
    if (audio.duration == 0) {
        audioIcon.src='images/speaker.svg';
        audio.play()
    } else if (!audio.paused) {
        audioIcon.src='images/mute.svg';
        audio.pause()
    } else {
        audioIcon.src='images/speaker.svg';
        audio.play()
    }
});

