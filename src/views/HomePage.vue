<template>
  <the-options></the-options>
  <the-list :todos="todos" @switch="changeStatus"></the-list>
</template>

<script>
import TheList from '@/components/TheList.vue';
import TheOptions from '@/components/TheOptions.vue';

export default {
  components: {
    TheOptions,
    TheList,
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
  },
};
</script>

<style scoped></style>
