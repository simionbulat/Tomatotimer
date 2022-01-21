<script>
import { mapActions, mapState } from "vuex";
import { Howl, Howler } from "howler";
export default {
  data() {
    return {
      timer: 0,
    };
  },
  computed: {
    ...mapActions(["clearTimerNow"]),
    ...mapState({
      actualTimer: (state) => state.actualTimer,
      defaultTimer: (state) => state.defaultTimer,
      settings: (state) => state.settings,
    }),
  },
  methods: {
    ShowTimer: function () {
      if (this.actualTimer >= 0) {
        let min = Math.floor(this.actualTimer / 60)
          .toString()
          .padStart(2, "0");
        let sec = (this.actualTimer % 60).toString().padStart(2, "0");
        let result = min + ":" + sec;
        if (this.settings.titleNotification) {
          this.AppendToTitle(result);
        } else {
          this.ReverseTitle();
        }
        return result;
      } else {
        this.PlaySound();
        this.clearTimerNow;
        return "00:00";
      }
    },
    AppendToTitle(text) {
      let newTitle = "(" + text + ") Tomato Timer";
      document.title = newTitle;
    },
    ReverseTitle() {
      document.title = "Tomato Timer";
    },
    PlaySound() {
      let sound = new Howl({
        src: [this.settings.actualSoundSrc],
      });
      sound.play();
      Howler.volume(this.settings.actualVolume);
    },
  },
};
</script>

<template>
  <div class="timer">
    <h1 class="timer-number">{{ ShowTimer() }}</h1>
  </div>
</template>

<style scoped>
.timer-number {
  font-size: 7rem;
}
</style>