<script>
import { mapActions, mapState } from "vuex";
import { Howl, Howler } from "howler";
export default {
  data() {
    return {};
  },
  mounted() {
    this.setSupposedTimer(this.actualTimer);
  },
  computed: {
    ...mapState({
      actualTimer: (state) => state.actualTimer,
      settings: (state) => state.settings,
      supossedTimer: (state) => state.supossedTimer,
      completedTimerText: (state) => state.completedTimerText,
      timerLog: (state) => state.timerLog,
      timeNow: (state) => state.timeNow,
      interval: (state) => state.interval,
      isTimerCompleted: (state) => state.isTimerCompleted,
      timerName: (state) => state.timerName,
    }),
  },

  methods: {
    ...mapActions([
      "clearIntervalNow",
      "setSupposedTimer",
      "saveLogToLocalStorage",
      "resetTimer",
    ]),
    ShowTimer() {
      if (this.isTimerCompleted == false) {
        if (this.actualTimer > 0) {
          return this.ShowTimeFormatted();
        }
      } else {
        console.log("inseamna ca e true, inseamna ca s-a activat din mutatie");
        console.log(
          "acuma timerCompleted ar trebui sa fie TRUE da este ",
          this.isTimerCompleted
        );
        this.$store.commit("toggleTimerCompleted");
        console.log(
          "acuma timerCompleted ar trebui sa fie False da este ",
          this.isTimerCompleted
        );

        this.PlaySound();
        this.AddTimerToLog();
        this.SaveLogToLocalStorage();
        // return this.completedTimerText;
      }
    },
    SaveLogToLocalStorage() {
      if (!localStorage) {
        console.log("Local Storage is not enabled");
      } else {
        localStorage.setItem("log", this.timerLog);
      }
    },
    ShowTimeFormatted() {
      let min = Math.floor(this.actualTimer / 60)
        .toString()
        .padStart(2, "0");
      let sec = (this.actualTimer % 60).toString().padStart(2, "0");
      let result = min + ":" + sec;
      return result;
    },
    PlaySound() {
      let sound = new Howl({
        src: [this.settings.actualSoundSrc],
      });
      sound.play();
      Howler.volume(this.settings.actualVolume);
    },
    AddTimerToLog() {
      this.$store.commit("addTimerToLog", this.GetTimerPayload());
    },
    GetTimerPayload() {
      return (
        new Date().toLocaleString("en-GB", { timeZone: "UTC" }) +
        " " +
        "----------" +
        this.timerName
      );
    },
  },
};
</script>

<template>
  <div class="timer">
    <h1 class="timer-number">{{ ShowTimer() }}</h1>
    <div>
      <ul>
        <li v-for="timer in timerLog" :key="timer._id">{{ timer }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.timer-number {
  font-size: 7rem;
}
</style>