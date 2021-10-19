//javascript source code
//using Web Audio DAW

const audioContext = new AudioContext();

/*let audMusic = new Audio();
audMusic.id = 'music';
audMusic.className = 'paused';
audMusic.src = '/source/sfx/transformalizer_music.mp3';
audMusic.controls = false;
document.body.appendChild(audMusic);

let audSFX = new Audio();
audSFX.id = 'sfx';
audSFX.className = 'paused';
audSFX.src = '/source/sfx/transformalizer_sfx.mp3';
audSFX.controls = false;
document.body.appendChild(audSFX);

let srcMusic = audioContext.createMediaElementSource(audMusic);
let srcSFX = audioContext.createMediaElementSource(audSFX);*/
let eleMusic = document.getElementById('music');
let eleSFX = document.getElementById('sfx');

let srcMusic = audioContext.createMediaElementSource(eleMusic);
let srcSFX = audioContext.createMediaElementSource(eleSFX);

srcMusic.connect(audioContext.destination);
srcSFX.connect(audioContext.destination);