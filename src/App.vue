<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Notepad>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Notepad from './components/Notepad.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Notepad
  }
}
</script>

<style lang="scss">

</style>
