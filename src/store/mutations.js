export default {
    now(state) {
        state.now = new Date();
    },

    changeTimer(state, toChangeTimerTo) {
        state.actualTimer = toChangeTimerTo;
    },
    updateTimerOneLessSecond(state) {
        state.actualTimer--
    },
    resetTimer(state) {
        state.actualTimer = state.supossedTimer;
    },
    setIntervalTimer(state, callback) {
        state.interval = setInterval(() => {
            if (callback) {
                callback();
            }
        }, 1000)
    },
    clearIntervalTimer(state) {
        if (state.interval != null) {
            clearInterval(state.interval)
        }
    },
    setIntervalToNull(state) {
        state.interval = null;
    },
    updateTitleNotification(state, payload) {
        if (payload == "on") {
            state.settings.titleNotification = true;
        } else {
            state.settings.titleNotification = false;
        }
    },
    updateBrowserNotification(state, payload) {
        if (payload == "on") {
            state.settings.browserNotification = false;
        } else {
            state.settings.browserNotification = true;
        }

    },
    updatePomodoroGoal(state, payload) {
        state.settings.numberOfDailyPomodoros = payload;
    },
    setSupposedTimer(state, payload) {
        state.supossedTimer = payload;
    },
    setSoundSource(state, payload) {
        state.settings.actualSoundSrc = payload;
    },
    setVolume(state, payload) {
        state.settings.actualVolume = payload;
    },
    setCustomTimer(state, payload) {
        state.settings.customTimer = payload;
    },
    setCustomPomodoroTimer(state, payload) {
        state.settings.pomodoroTimer = Number(payload);
    },
    setCustomShortTimer(state, payload) {
        state.settings.shortTimer = Number(payload);
    },
    setCustomLongTimer(state, payload) {
        state.settings.longTimer = Number(payload);
    },
    updateSettings(state, payload) {
        state.settings = payload;
    },
    addTimerToLog(state, payload) {
        state.timerLog.push(payload);
    },
    toggleTimerCompleted(state) {
        state.isTimerCompleted = !state.isTimerCompleted;
    },
    setTimerName(state, payload) {
        state.timerName = payload;
    }

}