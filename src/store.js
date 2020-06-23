import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store=new Vuex.Store({
  state: {
    sex:'女',
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(x => {
       if(x.done==true){
         return x
       }
      })
    }
  },
  mutations: {
    edit(state,payload){
      state.sex = payload.sex;
    }
  },
  actions: {}
})

export default store
