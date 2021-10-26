//javascript source code
//using Web Audio DAW

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const eleMusic = document.getElementById('music');
const eleSFX = document.getElementById('sfx');

let srcMusic = audioContext.createMediaElementSource(eleMusic);
let srcSFX = audioContext.createMediaElementSource(eleSFX);

srcMusic.connect(audioContext.destination);
srcSFX.connect(audioContext.destination);

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', ()=> {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    if (this.getAttribute('class') === 'paused') {
        eleMusic.play();
        eleSFX.play();
        this.setAttribute('class', 'playing');
        console.log('Playing...'); //debug
    }

    else if (this.getAttribute('class') === 'playing') {
        eleMusic.pause();
        eleSFX.pause();
        this.setAttribute('class', 'paused');
        console.log('Pausing...'); //debug
    }
});

const musButton = document.getElementById('music-button');
musButton.addEventListener('click', () => {});

const sfxButton = document.getElementById('sfx-button');
sfxButton.addEventListener('click', () => {});