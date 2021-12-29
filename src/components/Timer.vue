<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  data() {
    return {
      timer: "",
      // timer: new Date().toTimeString(),
    };
  },
  setup() {
    const store = useStore();
    return {
      longTimer: computed(() => store.state.longTimer),
    };
  },
};
</script>

<template>
  <div class="timer">
    <h1 class="timer-number">{{ longTimer }}</h1>
  </div>
</template>

<style scoped>
.timer-number {
  font-size: 7rem;
}
</style>