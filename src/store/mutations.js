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
        if (state.interval) {
            clearInterval(state.interval)
            state.interval = null;
        }
    },
    updatePomodoroGoal(state, payload) {
        state.settings.numberOfDailyPomodoros = payload;
    },
    setSupposedTimer(state, payload) {
        state.settings.supossedTimer = payload;
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
    }
}