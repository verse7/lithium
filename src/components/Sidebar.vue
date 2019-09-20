<template>
  <div class="flex flex-col align-center bg-gray-200 h-screen p-4">
    <h1 class="font-bold text-xl mb-2 text-teal-900">Lithium Notes</h1>
    <ul class="flex flex-col align-center text-gray-700">
      <li v-for="note of notes" :key="note.title" @click="selectNote(note)" >{{ note.title }}</li>
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
    this.notes = this.$store.getters.notes;
  },
  methods: {
    selectNote(note) {
      this.$store.commit('setCurrentNote', note);
    }
  }
}
</script>

<style scoped lang="scss">

</style>
