<script>
import Timer from "../components/Timer.vue";
import TimerButton from "./TimerButton.vue";
import TimerControlButton from "./TimerControlButton.vue";
export default {
  name: "TomatoTimer",
  components: {
    Timer,
    TimerButton,
    TimerControlButton,
  },

  data() {
    return {
      msg: "",
    };
  },
};
</script>

<template>
  <div class="main">
    <div class="content">
      <div class="timerButtons">
        <timer-button name="Pomodoro" />
        <timer-button name="Short Break" />
        <timer-button name="Long Break" />
      </div>
      <div>
        <Timer />
      </div>
      <div class="controlButtons">
        <timer-control-button title="start" color="#067e0c" />
        <timer-control-button title="stop" color="#8b0000" />
        <timer-control-button title="reset" color="#efefef" />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>


<style scoped>
.main {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  display: flex;
  width: 90%;
  height: 100%;
  margin: 0 auto;
}

.content {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-self: center;
}
.timerButtons {
  display: flex;
  flex-flow: row nowrap;
  margin: 55px auto 0 auto;
}
.timerButtons * {
  width: 300px;
}
.controlButtons {
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
}
.controlButtons * {
  width: 100px;
  margin: 0 25px;
}
</style>