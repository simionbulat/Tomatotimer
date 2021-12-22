import { createStore } from "vuex"

import state from "./state"

// Vue.use(Vuex)
const store = createStore({ state })
export default store;