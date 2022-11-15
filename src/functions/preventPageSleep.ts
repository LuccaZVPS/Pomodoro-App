const clickSoundMp3 = require("../sounds/click.mp3");
export function preventPageSleep () {
    const tapSound = new Audio(clickSoundMp3);
    tapSound.play()
    tapSound.volume = 0
    tapSound.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}