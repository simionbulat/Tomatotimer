<script>
export default {};
</script>
<template>
  <div class="header">
    <div class="title">
      <router-link to="/"> <h1>Tomato Timer</h1></router-link>
      <!-- <h1>tomato timer</h1> -->
    </div>
    <div class="links">
      <ul class="ul-links">
        <li><a href="">Link</a></li>
        <li><a href="">FAQ</a></li>
        <li>
          <router-link to="/settings">Settings</router-link>
        </li>
        <li><a href="">Tweet about us!</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: #f2f2f2;
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
.links {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  margin: auto;
  background: rgb(80, 80, 80);
  height: 50%;
  border: 1px solid #e6e6e6;
  border-radius: 2%;
}

.ul-links {
  width: 100%;
  list-style-type: none;
  text-align: center;
  padding: 0 15px;
}
.ul-links li {
  display: inline;
  margin: 0 15px;
}
.ul-links a {
  text-decoration: none;
  color: #e6e6e6;
}
a {
  text-decoration: none;
}
a h1 {
  color: #161515;
}
a.router-link-exact-active h1 {
  color: #363531;
}
</style>

