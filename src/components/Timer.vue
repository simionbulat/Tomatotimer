<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      timer: "",
    };
  },
  computed: mapState({
    actualTimer: (state) => state.actualTimer,
    defaultTimer: (state) => state.defaultTimer,
  }),

  methods: {
    showTimer: function () {
      let min = Math.floor(this.actualTimer / 60);
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
  </div>
</template>

<style scoped>
.timer-number {
  font-size: 7rem;
}
</style>