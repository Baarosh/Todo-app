<template>
  <the-header></the-header>
  <router-view @newitem="updateTodos" @switch="changeStatus" @delete="deleteTodo"></router-view>
  <!-- <the-footer></the-footer> -->
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
// import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    // TheFooter,
  },
  emits: ['newitem'],
  provide() {
    return {
      todos: this.todos,
    };
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Cook a dinner',
          completed: false,
        },
        {
          id: 2,
          title: 'Go to work',
          completed: false,
        },
      ],
    };
  },
  methods: {
    changeStatus(todo) {
      const foundTodo = this.todos.find((t) => t.id === todo.id);
      foundTodo.completed = !foundTodo.completed;
    },
    updateTodos(todo) {
      this.todos.push(todo);
    },
    deleteTodo(todo) {
      const foundTodo = this.todos.findIndex((t) => t.id === todo.id);
      this.todos.splice(foundTodo, 1);
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');

body {
  padding: 0;
  margin: 0;
  font-size: 16px;
  box-sizing: border-box;
  font-family: 'Bangers', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
}
</style>
