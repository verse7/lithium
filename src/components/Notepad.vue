<template>
  <div class="p-4 w-screen">
    <input v-model="title" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-2/5 appearance-none leading-normal mb-10" 
    type="text" placeholder="Title">

    <form @submit.prevent="addNote">
      <textarea v-model="body" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full h-64 appearance-none leading-normal mb-4">
      </textarea>
      <button @click="discard" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">Discard</button>
      <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'notepad',
  computed: {
    currentNote: {
      get: function() {
        return this.$store.getters.currentNote;
      },
      set: function(val) {
        console.log(val);
        this.title = this.$store.getters.currentNote.title;
        this.body = this.$store.getters.currentNote.body;
      }
    }
  },
  data() {
    return {
      title: '',
      body: ''
    }
  },
  created() {
    this.title = this.currentNote.title;
    this.body = this.currentNote.body;
  },
  methods: {
    addNote() {
      const note = {title: this.title, body: this.body};

      this.$store.commit('addNote', note);
    },

    discard() {
      this.title = '';
      this.body = '';
    }
  }
}
</script>

<style scoped>

</style>