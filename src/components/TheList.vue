<template>
  <section class="card">
    <ul>
      <li v-for="todo in todos" :key="todo.creationDate">
        <p class="todo-title">{{ todo.title }}</p>
        <p class="todo-completed" @click="switchStatus(todo)">{{ todo.completed }}</p>
        <button class="todo-delete" @click="deleteTodo(todo)">Delete</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['todos'],
  emits: ['switch'],
  methods: {
    switchStatus(todo) {
      this.$emit('switch', todo);
    },
  },
};
</script>

<style scoped>
.card {
  width: 50%;
  max-width: 400px;
  background-color: rgb(131, 139, 255);
  border-radius: 1.5rem;
  padding: 1.5rem;
  margin: 1rem auto;
}
</style>
