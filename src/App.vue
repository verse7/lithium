<template>
  <div id="app" class="flex">
    <Sidebar />
    <Notepad />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Notepad from './components/Notepad.vue';

export default {
  name: 'app',
  components: {
    Sidebar,
    Notepad
  }
}
</script>

<style lang="scss">

</style>
