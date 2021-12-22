<script>
export default {
  props: { title: String, color: String },
  data() {
    return {
      buttonName: this.title,
      buttonColor: this.color,
    };
  },
  methods: {
    doAction() {
      console.log("clicked on timer control button", this.buttonName);
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