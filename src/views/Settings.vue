<script>
import { mapState } from "vuex";
import { Howl, Howler } from "howler";
export default {
  name: "Settings",
  data() {
    return {
      message: "sal",
      soundKey: "",
      volumeKey: "",
      customPomodoro: "",
      customShortTimer: "",
      customLongTimer: "",
      localSessionStore: {},
      getLocalSessionStore: {},
    };
  },
  oncreate: {
    getLocalSession() {
      this.getLocalSessionStore = localStorage.getItem("timerStore");
    },
  },

  computed: {
    ...mapState({
      settings: (state) => state.settings,
    }),
  },
  methods: {
    updateTitleNotification(e) {
      this.$store.commit("updateTitleNotification", e.target.value);
    },
    playSound() {
      let sound = new Howl({
        src: [this.settings.actualSoundSrc],
      });
      sound.play();
      Howler.volume(this.settings.actualVolume);
    },
    selectSound(event) {
      this.$store.commit(
        "setSoundSource",
        this.settings.defaultSoundSrc[event.target.value]
      );
    },
    selectVolume(event) {
      this.$store.commit(
        "setVolume",
        this.settings.defaultTimerVolumes[event.target.value]
      );
    },
    setCustomPomodoroTimer(event) {
      this.$store.commit("setCustomPomodoroTimer", event.target.value * 60);
    },
    setCustomShortTimer(event) {
      this.$store.commit("setCustomShortTimer", event.target.value * 60);
    },
    setCustomLongTimer(event) {
      this.$store.commit("setCustomLongTimer", event.target.value * 60);
    },
    saveToLocal() {
      if (!localStorage) {
        console.log("Local Storage is not supported");
      } else {
        // localStorage.setItem("timerStore", this.localSessionStore);
        localStorage.setItem("timerStore", this.message);

        console.log(localStorage.getItem("timerStore"));
        console.log(this.localSessionStore);
      }
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
          :value="this.settings.titleNotification"
        />
        <label for="timerNotifications">Timer indication in title?</label>
      </div>

      <div class="box">
        <input
          id="browserNotification"
          type="checkbox"
          :value="this.settings.browserNotification"
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
          :value="this.settings.numberOfDailyPomodoros"
        />
      </div>
      <br />
      <div class="box">
        <h3>Select Sound</h3>
        <select
          name="selectSound"
          id="sound"
          size="5"
          @change="selectSound($event)"
          v-model="soundKey"
        >
          <option value="analogalarm">Analog Alarm</option>
          <option value="beep">Beep</option>
          <option value="bell">Door Bell</option>
          <option value="elevatorDing">Elevator Ding</option>
          <option value="doorbell">Door Bell</option>
        </select>
      </div>
      <br />
      <div class="box">
        <h3>Select Volume</h3>
        <select
          name="selectVolume"
          id="volume"
          size="5"
          @change="selectVolume($event)"
          v-model="volumeKey"
        >
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
          <input
            type="number"
            min="1"
            max="99"
            :value="settings.pomodoroTimer / 60"
            @change="setCustomPomodoroTimer($event)"
          />
        </div>
        <div class="customTimer">
          <label for="">Short Timer</label>
          <input
            type="number"
            min="1"
            max="99"
            :value="settings.shortTimer / 60"
            @change="setCustomShortTimer($event)"
          />
        </div>
        <div class="customTimer">
          <label for="">Long Timer</label>
          <input
            type="number"
            min="1"
            max="99"
            :value="settings.longTimer / 60"
            @change="setCustomLongTimer($event)"
          />
        </div>
      </div>
      <div class="buttons box">
        <router-link to="/"
          ><button @click="saveToLocal()">Save</button></router-link
        >

        <button>Reset</button>
        <button @click="playSound()">Sound Test</button>
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