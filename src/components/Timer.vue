<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      loaded: 0,
      mathDiff: 0,
      timer: 0,
    };
  },
  mounted() {
    this.loaded = new Date().getTime();
  },
  computed: mapState({
    actualTimer: (state) => state.actualTimer,
    defaultTimer: (state) => state.defaultTimer,
  }),
  timeOnPage() {
    const diff = (this.loaded - new Date().getTime()) / 1000;
    let mathDiff = Math.abs(Math.round(diff % 60));
    // return diff;
    this.mathDiff = mathDiff;
    return mathDiff;
  },
  methods: {
    showTimer: function () {
      let min = Math.floor(this.actualTimer / 60)
        .toString()
        .padStart(2, "0");
      let sec = (this.actualTimer % 60).toString().padStart(2, "0");
      let result = min + ":" + sec;
      return result;
    },
  },
};
</script>

<template>
  <div class="timer">
    <h1 class="timer-number">{{ showTimer() }}</h1>
    <h1 class="timer-number">{{ timeOnPage }}</h1>
  </div>
</template>

<style scoped>
.timer-number {
  font-size: 7rem;
}
</style>