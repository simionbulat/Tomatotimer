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
    ...mapActions(["clearTheInterval", "resetTimer", "timerWorking"]),
  },
  methods: {
    doAction() {
      if (this.title === "stop") {
        this.clearTheInterval;
      } else if (this.title === "start") {
        this.timerWorking;
      } else {
        this.resetTimer;
      }
    },
  },
};
</script>

<template>
  <div class="mainDiv">
    <button v-on:click="doAction()" v-bind:style="{ background: buttonColor }">
      {{ buttonName }}
    </button>
  </div>
</template>

<style scoped>
button {
  width: 100px;
  height: 50px;
  text-transform: capitalize;
}
.mainDiv {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>