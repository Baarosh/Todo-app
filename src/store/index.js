import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      listOfTodos: [
        { id: 1, title: 'Cook a dinner', completed: false },
        { id: 2, title: 'Running', completed: false },
        { id: 3, title: 'Go to work', completed: false },
        { id: 4, title: 'Shopping', completed: false }
      ],
      sortBy: 'id',
      filterBy: ''
    };
  },
  mutations: {
    changeSorting(state, payload) {
      state.sortBy = payload;

      if (state.sortBy === 'id') {
        state.listOfTodos = state.listOfTodos.sort((a, b) => {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        });
      } else {
        state.listOfTodos = state.listOfTodos.sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        });
      }
    },
    setFilter(state, payload) {
      state.filterBy = payload;
    },
    changeCompletion(state, payload) {
      const todo = state.listOfTodos.find(t => t.id === payload);
      todo.completed = !todo.completed;
    },
    deleteTodo(state, payload) {
      state.listOfTodos = state.listOfTodos.filter(todo => todo.id !== payload);
    }
  },
  actions: {
    changeSorting(context, payload) {
      context.commit('changeSorting', payload);
    },
    setFilter(context, payload) {
      context.commit('setFilter', payload);
    },
    changeCompletion(context, payload) {
      context.commit('changeCompletion', payload);
    },
    deleteTodo(context, payload) {
      context.commit('deleteTodo', payload);
    }
  },
  getters: {
    listOfTodos(state, getters) {
      const todoList = state.listOfTodos;
      if (todoList.length > 0) {
        return state.listOfTodos.filter(todo =>
          todo.title.toLowerCase().includes(getters.filterBy)
        );
      }
      return todoList;
    },
    sortBy(state) {
      return state.sortBy;
    },
    filterBy(state) {
      return state.filterBy;
    }
  },
  modules: {}
});
