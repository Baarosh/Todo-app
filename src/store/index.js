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
      todoList: [
        { id: 1, title: 'Cook a dinner', category: 'Home', completed: false },
        { id: 2, title: 'Running', category: 'Home', completed: false },
        { id: 3, title: 'Go to work', category: 'Work', completed: false },
        { id: 4, title: 'Shopping', category: 'Home', completed: false },
      ],
      sortBy: 'alpha',
      filterBy: '',
      activeCategory: 'Home',
    };
  },
  mutations: {
    setSorting(state, payload) {
      state.sortBy = payload;

      if (state.sortBy === 'id') {
        state.todoList = state.todoList.sort((a, b) => {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        });
      } else {
        state.todoList = state.todoList.sort((a, b) => {
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
      const todo = state.todoList.find((t) => t.id === payload);
      todo.completed = !todo.completed;
    },
    deleteTodo(state, payload) {
      state.todoList = state.todoList.filter((todo) => todo.id !== payload);
    },
    addNewTodo(state, payload) {
      state.todoList.push({
        id: generator.next().value,
        title: payload.title,
        category: payload.category,
        completed: false,
      });
    },
    setActiveCategory(state, payload) {
      state.activeCategory = payload;
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
    setActiveCategory(context, payload) {
      context.commit('setActiveCategory', payload);
    },
  },
  getters: {
    displayTodoList(state, getters) {
      const theList = state.todoList;

      if (theList.length > 0) {
        return state.todoList.filter(
          (todo) =>
            todo.title.toLowerCase().includes(getters.getFilter) &&
            todo.category === getters.getActiveCategory
        );
      }
      return theList;
    },
    getTodoList(state) {
      return state.todoList;
    },
    getSorting(state) {
      return state.sortBy;
    },
    getFilter(state) {
      return state.filterBy;
    },
    getActiveCategory(state) {
      return state.activeCategory;
    },
    getNumberOfActiveCategories(_, getters) {
      const counter = {
        home: 0,
        work: 0,
        other: 0,
      };
      const todoList = getters.getTodoList;

      todoList.forEach((todo) => {
        if (todo.category === 'Home') counter.home += 1;
        else if (todo.category === 'Work') counter.work += 1;
        else counter.other += 1;
      });

      return counter;
    },
  },
  modules: {},
});
