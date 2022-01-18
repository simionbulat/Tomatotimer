<script>
import { mapState } from "vuex";
export default {
  name: "Settings",
  data() {
    return {
      message: "sal",
    };
  },
  computed: {
    ...mapState({
      titleNotification: (state) => state.titleNotification,
      browserNotification: (state) => state.browserNotification,
      defaultTimer: (state) => state.defaultTimer,
      shortTimer: (state) => state.shortTimer,
      longTimer: (state) => state.longTimer,
      numberOfDailyPomodoros: (state) => state.numberOfDailyPomodoros,
    }),
  },
  methods: {
    updateTitleNotification(e) {
      this.$store.commit("updateTitleNotification", e.target.value);
    },
  },
};
</script>

<template>
  <div class="content">
    <div class="actualContent">
      <div class="box">
        <h1>Options</h1>
        <h2>User Preferences</h2>
        <input
          id="timerNotifications"
          type="checkbox"
          :value="this.titleNotification"
        />
        <label for="timerNotifications">Timer indication in title?</label>
      </div>

      <div class="box">
        <input
          id="browserNotification"
          type="checkbox"
          :value="browserNotification"
        />
        <label for="browserNotification">Browser Notifications?</label>
      </div>
      <div class="box">
        <label for="pomodoroGoal">Pomodoro goal for the day </label>
        <input
          type="number"
          min="1"
          max="50"
          maxlength="3"
          :value="numberOfDailyPomodoros"
        />
      </div>
      <br />
      <div class="box">
        <h3>Select Sound</h3>
        <select name="selectSound" id="sound" size="5">
          <option value="80sAlarm">80s Alarm</option>
          <option value="alarmclock">Alarm Clock</option>
          <option value="alarmwatch">Alarm Watch</option>
          <option value="ding">Elevator Ding</option>
          <option value="doorbell">Door Bell</option>
        </select>
      </div>
      <br />
      <div class="box">
        <h3>Select Volume</h3>
        <select name="selectVolume" id="volume" size="5">
          <option value="mute">Mute</option>
          <option value="25%">25%</option>
          <option value="50%">50%</option>
          <option value="75%">75%</option>
          <option value="100%">100%</option>
        </select>
      </div>
      <div class="box">
        <h3>Set Custom Times</h3>
        <h5>(in minutes)</h5>
      </div>
      <div class="customTimers box">
        <div class="customTimer">
          <label for="">Pomodoro</label>
          <input type="number" min="1" max="99" :value="defaultTimer / 60" />
        </div>
        <div class="customTimer">
          <label for="">Short Timer</label>
          <input type="number" min="1" max="99" :value="shortTimer / 60" />
        </div>
        <div class="customTimer">
          <label for="">Long Timer</label>
          <input type="number" min="1" max="99" :value="longTimer / 60" />
        </div>
      </div>
      <div class="buttons box">
        <button>Save</button>
        <button>Reset</button>
        <button>Sound Test</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
select {
  width: 50%;
}
.content {
  width: 100%;
}
.actualContent {
  width: 1000px;
  margin: 15px auto;
  text-align: start;
  background: #efefef;
}
.box {
  margin: 15px;
}
.customTimers {
  display: flex;
  flex-flow: row;
}
.customTimer {
  display: flex;
  flex-flow: column;
  margin: 0 auto 50px auto;
}
.buttons {
  display: flex;
  flex-flow: row;
  margin: 4px 22px;
}
.buttons button {
  margin: 15px 2px;
  background: #3437c5;
  color: rgb(245, 239, 239);
}
input[type="number"] {
  width: 50px;
}
</style>