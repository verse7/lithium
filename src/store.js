import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: JSON.parse(localStorage.getItem('notes')) || [],
    currentNote: JSON.parse(localStorage.getItem('currentNote')) || {},
  },
  getters: {
    notes(state) {
      return state.notes;
    },
    
    currentNote(state) {
      return state.currentNote;
    }
  },
  mutations: {
    setCurrentNote(state, note) {
      this.currentNote = note;
      localStorage.setItem('currentNote', JSON.stringify(note));
    },

    addNote(state, note) {
      const notes = JSON.parse(localStorage.getItem('notes')) || [];
      notes.push(note);
      localStorage.setItem('notes', JSON.stringify(notes));
      state.notes.push(note);
    }
  },
  actions: {
  }
})
