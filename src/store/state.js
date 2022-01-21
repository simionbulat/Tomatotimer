export default {
    settings: {
        longTimer: 10 * 60,
        shortTimer: 5 * 60,
        pomodoroTimer: 25 * 60,
        titleNotification: "false",
        // browserNotification: "false",
        numberOfDailyPomodoros: 1,
        defaultTimerVolumes: {
            "mute": "0.0",
            "25%": "0.25",
            "50%": "0.5",
            "75%": "0.75",
            "100%": "1.0"
        },
        actualVolume: "0.75",
        timerSoundSrc: "",
        defaultSoundSrc: {
            "analogalarm": "/sounds/analog-alarm-clock.wav",
            "beep": "/sounds/beep.mp3",
            "doorbell": "/sounds/doorbell-e.wav",
            "elevatorDing": "/sounds/elevator-ding.wav"
        },
        actualSoundSrc: "/sounds/analog-alarm-clock.wav",
        customTimer: null,
        defaultSettings: {
            "titleNotification": "false",
            "numberOfDailyPomodoros": "1",
            "defaultSoundSrc": "/sounds/analog-alarm-clock.wav",
            "defaultVolume": "0.5",
            "customTimes": {
                "pomodoro": "1500",
                "short": "300",
                "long": "600"
            }
        }

    },
    actualTimer: 25 * 60,
    supossedTimer: 0,
    interval: null,
    now: new Date()
} 