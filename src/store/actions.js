export default {
    changeTimer({ commit }, payload) {
        commit('changeTimer', payload)
    },
    timerWorking({ commit }) {
        setInterval(() => {
            commit("updateTimerOneLessSecond")
        }, 1000)
    },
    clearTheInterval({ commit }) {
        commit("clearTheInterval")
    },
    resetTimer({ commit }) {
        commit("resetTimer")
    }
}