<template>
  <div class="flex flex-col align-center bg-gray-200 h-screen p-4">
    <h1 class="font-bold text-xl mb-2 text-teal-900">Lithium Notes</h1>
    <ul class="flex align-center text-gray-700">
      <li v-for="note of notes" :key="note" @click="selectNote(note)" >{{ note.title }}</li>
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
  },
  methods: {
    selectNote(note) {
      console.log(note);
    }
  }
}
</script>

<style scoped lang="scss">

</style>
