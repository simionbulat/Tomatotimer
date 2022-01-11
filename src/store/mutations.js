export default {

    changeTimer(state, toChangeTimerTo) {
        state.actualTimer = toChangeTimerTo;
    },
    updateTimerOneLessSecond(state) {
        state.actualTimer--
    },
    clearTheInterval(interval) {
        console.log("clearInterval was pressed;")

        clearInterval(interval);
    },
    resetTimer(state) {
        console.log("reset timer was pressed;")

        state.actualTimer = state.defaultTimer;
    }
}