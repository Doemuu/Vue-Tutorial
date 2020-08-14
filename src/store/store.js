import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalTvCount: 10, // The TV inventory
    isLarryHappy: true,
    isJennyHappy: true,
    screamingperson: ""
  },

  getters: {
      happyStaff: state => {
        return state.isLarryHappy && state.isJennyHappy
      },
      screamingPerson: state => {
        return state.screamingperson
      }
  },

  mutations: {
    removeTv(state, amount) {
      state.totalTvCount -= amount
    },
    alterScreamingPerson(state, person){
      switch (person) {
        case "Larry":
          if(state.isLarryHappy){
            state.isLarrayHappy = false;
            state.screamingperson = person;
          }else{
            state.isLarryHappy = true;
            state.screamingperson = "";
          }
          break;
        case "Jenny":
          if(state.isJennyHappy){
            state.isJennyHappy = false;
            state.screamingperson = person;
          }else{
            state.isJennyHappy = true;
            state.screamingperson = "";
          }
          break;
      }
    }
  },

  actions: {
    removeTv(context, amount) {
      if(context.state.totalTvCount >= amount) {
        context.commit('removeTv', amount);
      }
    },
    alterScreamingPerson(context, person){
      if(person == "Larry" || person == "Jenny"){
        context.commit("alterScreamingPerson", person);
      }
    }
  }
});
