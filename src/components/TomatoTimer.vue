<script>
export default {
  name: "TomatoTimer",
};
</script>

<template>
  <div class="main">
    <div class="content">
      <div class="header">
        <div class="title">
          <h1>Tomato Timer</h1>
        </div>
        <div class="links">
          <ul class="ul-links">
            <li><a href="">Link</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Settings</a></li>
            <li><a href="">Tweet about us!</a></li>
          </ul>
        </div>
      </div>
      <h1>Here is where we do page then we separate it with components</h1>
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
}
.header {
  background-color: #f2f2f2;
  height: 100px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
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
</style>