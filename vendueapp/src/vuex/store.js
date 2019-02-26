import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({

  state: {
    
    mineraltag: 1,
    unReadNumber:0,
    flag: 1
  },
  mutations: {

    updatemineraltag(state, tag) {
      state.mineraltag = tag;
    },
    
    unReadNumber(state, tag) {
      state.unReadNumber = tag;
    },
    updateFlag(state, flag) {
      state.flag = flag;
    }
  },
  getters: {


  },
  actions: {


  }
})
export default store
