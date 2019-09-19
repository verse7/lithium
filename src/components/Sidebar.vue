<template>
  <div class="sidebar">
    <ul>
      <li v-for="note of notes" :key="note">{{ note.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      notes: []
    }
  },

  created() {
    this.notes = [{title: 'test', body: 'testbody'}]
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  width: 15%;
  height: 100vh;
  background: pink;
}
</style>
