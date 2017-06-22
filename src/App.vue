<template>
  <div id="app">
    <transition name="globalfade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    background: url('../static/images/background.jpg') no-repeat 50% 30%;
  }

</style>
