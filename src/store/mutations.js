export default {

    changeTimer(state, toChangeTimerTo) {
        state.actualTimer = toChangeTimerTo;
    },
    updateTimerOneLessSecond(state) {
        // let anotherTimer = [...state.actualTimer]
        state.actualTimer--
    },
    // timerLessSecond(state) {
    //     let newTimer = state.actualTimer--;
    //     // this.changeTimer(state, newTimer);
    //     console.log("timer less second was pressd", newTimer)
    // },
    clearTheInterval(interval) {
        console.log("clearInterval was pressed;")

        clearInterval(interval);
    },
    resetTimer(state) {
        console.log("reset timer was pressed;")

        state.actualTimer = state.defaultTimer;
    }
}