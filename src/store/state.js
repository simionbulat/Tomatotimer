export default {

    longTimer: 10 * 60,
    shortTimer: 5 * 60,
    actualTimer: 0,
    pomodoroTimer: 25 * 60,
    supossedTimer: 0,
    interval: null,
    titleNotification: false,
    browserNotification: false,
    numberOfDailyPomodoros: 1,
    defaultTimerVolumes: {
        "mute": "0.0",
        "25%": "0.25",
        "50%": "0.5",
        "75%": "0.75",
        "100%": "1.0"
    },
    actualVolume: "",
    timerSoundSrc: "",
    defaultSoundSrc: {
        "analogalarm": "/sounds/analog-alarm-clock.wav",
        "beep": "/sounds/beep.mp3",
        "bell": "/sounds/bell.wav",
        "doorbell": "/sounds/doorbell-e.wav",
        "elevatorDing": "/sounds/elevator-ding.wav"
    },
    actualSoundSrc: "",
    customTimer: null,
    defaultSettings: {
        "timerIndication": "false",
        "browserIndication": "false",
        "pomodoroGoal": "1",
        "defaultSoundSrc": "/sounds/analog-alarm-clock.wav",
        "defaultVolume": "0.5",
        "customTimes": {
            "pomodoro": "150"
        }
    }

} 