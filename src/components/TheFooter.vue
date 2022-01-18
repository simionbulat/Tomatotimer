<script>
export default {};
</script>

<template>
  <div class="footer">
    <div class="shortcuts colorSecondary borderStyle">
      <h3>Keyboard Shortcuts</h3>
      <ul>
        <li><span>SPACE</span> Start or Stop the timer</li>
        <li><span>ALT + P</span> Pomodoro</li>
        <li><span>ALT + S</span> Short Break</li>
        <li><span>ALT + L</span> Long Break</li>
        <li><span>ALT + R</span> Reset Timer</li>
      </ul>
    </div>
    <div class="notifications colorSecondary borderStyle">
      <h3>Notifications</h3>
      <p>
        You can change the audio tone and volume via Settings Desktop <br />
        Notifications are currently supported in Chrome, Firefox and Safari
      </p>
      <button>Enable Desktop Notifications</button>
    </div>
    <div class="settings colorSecondary borderStyle">
      <h3>Settings</h3>
      <p>You can set custom times, audio tone and volume via Settings.</p>
    </div>
  </div>
</template>

<style scoped>
.footer div {
  margin: 15px;
}
li {
  text-align: start;
}
span {
  font-weight: bold;
}
.shortcuts {
  padding: 3px;
  width: 33%;
}
.notifications {
  padding: 15px;
  width: 40%;
  text-align: start;
}
.settings {
  padding: 13px;
  width: 33%;
}
button {
  background: #d6b96f;
}
.colorSecondary {
  background: #d6b96f;
}
.borderStyle {
  border: 1px solid #efefef;
  border-radius: 2%;
}
.footer {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  margin: 25px auto;
}
</style>
