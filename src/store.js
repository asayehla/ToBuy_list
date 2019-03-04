import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
        done: false,
        text: 'Bananer'
      },
      {
        done: false,
        text: 'Äpplen'
      },
      {
        done: false,
        text: 'Ägg'
      }
    ],
    activeSlide: 0

  },
  mutations: {
    swipe(state, index) {
      state.activeSlide = index;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    updateTodo(state, index) {
      state.todos[index].done = !state.todos[index].done;
    }
  },
  actions: {
    newTodo(ctx, todo) {
      if (todo.text != '') {
        ctx.commit('addtodo', todo);

        //gör datan persistent med local storage

        //synca to mongo
        //api. "/todos" , POST, GET, PATCH, (PUT)
        //skapa olika todos collection
      }
    }
  },
  getters: {
    todos(state) {
      return state.todos;
    },
    doneTodos(state) {
      return state.todos.filter(todos => todo.done);
    }
  }
})
