export default {
    changeTimer({ commit }, payload) {
        commit('changeTimer', payload)
    },
    timerWorking({ commit }) {
        commit("updateTimerOneLessSecond")
    },
    resetTimer({ commit }) {
        commit("resetTimer")
    },
    setTimerNow({ commit, state }) {
        if (!state.interval) {
            commit("setIntervalTimer", () => commit("updateTimerOneLessSecond"))
        }
    },
    clearTimerNow({ commit }) {
        commit("clearIntervalTimer");
    }


}