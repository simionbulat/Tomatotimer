<script>
export default {};
</script>
<template>
  <div class="header">
    <div class="title">
      <router-link to="/"> <h1>Tomato Timer</h1></router-link>
    </div>
    <div class="links">
      <ul class="ul-links">
        <li>
          <router-link to="/faq"> Faq </router-link>
        </li>
        <li>
          <router-link to="/log">Log</router-link>
        </li>
        <li>
          <router-link to="/settings">Settings</router-link>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank">Tweet about us!</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 100px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
}
.title {
  width: 50%;
}
.title h1:hover {
  border-bottom: 2px solid rgb(79, 197, 79);
}

.links {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  margin: auto;
  background: #d6b96f;
  height: 50%;
  border: 1px solid #e6e6e6;
  border-radius: 2%;
}

.ul-links {
  width: 100%;
  list-style-type: none;
  text-align: center;
  padding: 0 15px;
  font-weight: bold;
}
.ul-links li {
  display: inline;
  margin: 0 15px;
}
.ul-links a {
  text-decoration: none;
  color: #181717;
}
a {
  text-decoration: none;
}
a:hover {
  border-bottom: 2px solid rgb(79, 197, 79);
}
a h1 {
  color: #161515;
  width: fit-content;
  margin: 15px auto;
}
a.router-link-exact-active h1 {
  color: #363531;
}
</style>

