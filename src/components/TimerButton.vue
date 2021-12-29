<script>
export default {
  props: { name: String, timer: { type: String, coerce: (str) => +str } },
  data() {
    return {
      //   buttonName: this.name || "Pomodoro",
      buttonName: this.name,
      buttonTimer: this.timer,
    };
  },
  methods: {
    changeTimer: function (event) {
      console.log("timer was clicked to change to ", this.timer);
      if (event) {
        alert(event.target.tagName);
      }
    },
  },
};
</script>

<template>
  <div>
    <button type="button" v-on:click="changeTimer()">{{ buttonName }}</button>
  </div>
</template>

<style scoped>
button {
  width: 100%;
  height: 25px;
  background: #d6b96f;
  border: 1px solid green;
  border-radius: 2%;
}
button:hover {
  background: green;
}
</style>