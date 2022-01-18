export default {
    changeTimer({ commit }, payload) {
        commit('changeTimer', payload)
    },
    timerWorking({ commit }) {
        commit("updateTimerOneLessSecond")
    },
    resetTimer({ commit }) {
        commit("resetTimer")
        commit("clearIntervalTimer");
    },
    setTimerNow({ commit, state }) {
        if (!state.interval) {
            commit("setIntervalTimer", () => commit("updateTimerOneLessSecond"))
        }
    },
    clearTimerNow({ commit }) {
        commit("clearIntervalTimer");
    },
    setSupposedTimer({ commit }, payload) {
        commit("setSupposedTimer", payload)
    }
}