import { createStore } from 'vuex';

function* generatorCreator() {
  let index = 5;

  while (true) {
    // eslint-disable-next-line no-plusplus
    yield index++;
  }
}

const generator = generatorCreator();

export default createStore({
  state() {
    return {
      listOfTodos: [
        { id: 1, title: 'Cook a dinner', completed: false },
        { id: 2, title: 'Running', completed: false },
        { id: 3, title: 'Go to work', completed: false },
        { id: 4, title: 'Shopping', completed: false },
      ],
      sortBy: 'alpha',
      filterBy: '',
    };
  },
  mutations: {
    setSorting(state, payload) {
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
    setCompletion(state, payload) {
      const todo = state.listOfTodos.find((t) => t.id === payload);
      todo.completed = !todo.completed;
    },
    deleteTodo(state, payload) {
      state.listOfTodos = state.listOfTodos.filter((todo) => todo.id !== payload);
    },
    addNewTodo(state, payload) {
      state.listOfTodos.push({
        id: generator.next().value,
        title: payload,
        completed: false,
      });
    },
  },
  actions: {
    setSorting(context, payload) {
      context.commit('setSorting', payload);
    },
    setFilter(context, payload) {
      context.commit('setFilter', payload);
    },
    setCompletion(context, payload) {
      context.commit('setCompletion', payload);
    },
    deleteTodo(context, payload) {
      context.commit('deleteTodo', payload);
    },
    addNewTodo(context, payload) {
      context.commit('addNewTodo', payload);
    },
  },
  getters: {
    getListOfTodos(state, getters) {
      const todoList = state.listOfTodos;
      if (todoList.length > 0) {
        return state.listOfTodos.filter((todo) =>
          todo.title.toLowerCase().includes(getters.getFilter)
        );
      }
      return todoList;
    },
    getSorting(state) {
      return state.sortBy;
    },
    getFilter(state) {
      return state.filterBy;
    },
  },
  modules: {},
});
