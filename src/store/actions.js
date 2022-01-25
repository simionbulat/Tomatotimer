import state from "./state";

export default {
    changeTimer({ commit }, payload) {
        commit('changeTimer', payload)
    },
    changeTimerAndSupposedTimer({ commit, dispatch }, payload) {
        dispatch("resetTimer");
        commit("changeTimer", payload);
        commit("setSupposedTimer", payload);
        switch (payload) {
            case state.settings.pomodoroTimer:
                commit("setTimerName", "Pomodoro");
                break;
            case state.settings.shortTimer:
                commit("setTimerName", "Short Timer");
                break;
            case state.settings.longTimer:
                commit("setTimerName", "LongTimer");
                break;
        }
    },
    timerWorking({ commit }) {
        commit("updateTimerOneLessSecond")
    },
    resetTimer({ commit }) {
        commit("resetTimer")
        commit("clearIntervalTimer");
        commit("setIntervalToNull");
    },
    setTimerNow({ commit, dispatch, state }) {
        if (!state.interval) {
            commit("setIntervalTimer", () => {
                if (state.actualTimer > 1) {
                    commit("updateTimerOneLessSecond")
                } else {
                    dispatch("resetTimer");
                    commit("toggleTimerCompleted");
                }
            })
        }
    },

    clearIntervalNow({ commit }) {
        commit("clearIntervalTimer");

    },
    setSupposedTimer({ commit }, payload) {
        commit("setSupposedTimer", payload)
    },

}