<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      loaded: 0,
      timer: 0,
    };
  },
  mounted() {
    this.loaded = new Date().getTime();
  },
  computed: {
    ...mapActions(["clearTimerNow"]),
    ...mapState({
      actualTimer: (state) => state.actualTimer,
      defaultTimer: (state) => state.defaultTimer,
    }),
  },
  methods: {
    showTimer: function () {
      if (this.actualTimer >= 0) {
        let min = Math.floor(this.actualTimer / 60)
          .toString()
          .padStart(2, "0");
        let sec = (this.actualTimer % 60).toString().padStart(2, "0");
        let result = min + ":" + sec;
        return result;
      } else {
        this.clearTimerNow;
        return "00:00";
      }
    },
  },
};
</script>

<template>
  <div class="timer">
    <h1 class="timer-number">{{ showTimer() }}</h1>
  </div>
</template>

<style scoped>
.timer-number {
  font-size: 7rem;
}
</style>