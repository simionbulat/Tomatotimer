<script>
import { mapActions } from "vuex";
export default {
  props: { title: String, color: String },
  data() {
    return {
      buttonName: this.title,
      buttonColor: this.color,
    };
  },
  computed: {
    ...mapActions([
      "resetTimer",
      "timerWorking",
      "setTimerNow",
      "clearTimerNow",
    ]),
    // SetupKeyboardListeners() {
    //   windows.addEventListener("startStopTimer", (event) => {
    //     this.DoAction();
    //   });
    // },
    // RemoveKeyboardListener() {
    //   window.removeEventListener("startStopTimer");
    // },
  },
  methods: {
    DoAction() {
      if (this.title === "stop") {
        this.clearTimerNow;
      } else if (this.title === "start") {
        this.setTimerNow;
      } else {
        this.resetTimer;
      }
    },
    DoAnotherAction(e) {
      console.log(e.code);
    },
  },
};
</script>

<template>
  <div class="mainDiv">
    <button
      v-on:click="DoAction()"
      @keydown="DoAnotherAction($event)"
      v-bind:style="{ background: buttonColor }"
    >
      {{ buttonName }}
    </button>
  </div>
</template>

<style scoped>
button {
  width: 100px;
  height: 50px;
  text-transform: capitalize;
  border: none;
}
button:hover {
  border-bottom: 2px solid rgb(79, 197, 79);
}
.mainDiv {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>