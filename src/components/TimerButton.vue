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
    getLongTimer: (state) => state.settings.longTimer,
    getPomodoroTimer: (state) => state.settings.pomodoroTimer,
    getShortTimer: (state) => state.settings.shortTimer,
  }),

  methods: {
    ...mapActions(["changeTimer", "setSupposedTimer"]),
    ChangeTheTimer: function () {
      switch (this.name) {
        case "Pomodoro":
          this.changeTimer(this.getPomodoroTimer);
          this.setSupposedTimer(this.getPomodoroTimer);
          break;
        case "Short Break":
          this.changeTimer(this.getShortTimer);
          this.setSupposedTimer(this.getShortTimer);

          break;
        case "Long Break":
          this.changeTimer(this.getLongTimer);
          this.setSupposedTimer(this.getLongTimer);

          break;
      }
    },
  },
};
</script>

<template>
  <div class="btn">
    <button type="button" v-on:click="ChangeTheTimer()">
      {{ buttonName }}
    </button>
  </div>
</template>

<style scoped>
button {
  border: none;
}
.btn {
  margin: 0 1px;
  width: 30%;
}
.btn button {
  width: 100%;
  height: 25px;
  background: #d6b96f;
  border-bottom: 1px solid rgb(79, 197, 79);
  border-radius: 1%;
  box-shadow: 1px 1px rgb(211, 51, 51);
  box-shadow: inherit;
}
button:hover {
  background: rgb(79, 197, 79);
}
</style>