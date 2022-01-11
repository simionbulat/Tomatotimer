<script>
import { mapActions, mapState } from "vuex";
export default {
  props: { name: String },
  data() {
    return {
      buttonName: this.name,
    };
  },
  computed: mapState({
    getLongTimer: (state) => state.longTimer,
    getDefaultTimer: (state) => state.defaultTimer,
    getShortTimer: (state) => state.shortTimer,
  }),

  methods: {
    ...mapActions(["changeTimer"]),
    changeTheTimer: function () {
      switch (this.name) {
        case "Pomodoro":
          this.changeTimer(this.getDefaultTimer);
          break;
        case "Short Break":
          this.changeTimer(this.getShortTimer);
          break;
        case "Long Break":
          this.changeTimer(this.getLongTimer);
          break;
      }
    },
  },
};
</script>

<template>
  <div>
    <button type="button" v-on:click="changeTheTimer()">
      {{ buttonName }}
    </button>
  </div>
</template>

<style scoped>
button {
  width: 100%;
  height: 25px;
  background: #d6b96f;
  border: 1px solid green;
  border-radius: 2%;
}
button:hover {
  background: green;
}
</style>