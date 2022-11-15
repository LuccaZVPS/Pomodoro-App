const clickSoundMp3 = require("../sounds/alarm.mp3");

export const alarmSound = () => {
    const alarmSound = new Audio(clickSoundMp3);
    alarmSound.play();
    setTimeout(() => {
        alarmSound.pause();
        alarmSound.currentTime = 0;
      }, 6000);

}