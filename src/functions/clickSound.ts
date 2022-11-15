const clickSoundMp3 = require("../sounds/click.mp3");

export  const clickSound = () => {
    const tapSound = new Audio(clickSoundMp3);
    tapSound.currentTime = 0.5
    tapSound.play();
}