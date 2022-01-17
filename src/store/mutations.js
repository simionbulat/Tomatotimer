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
        state.actualTimer = state.defaultTimer;
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
    }
}