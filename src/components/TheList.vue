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
  emits: ['switch', 'delete'],
  methods: {
    switchStatus(todo) {
      this.$emit('switch', todo);
    },
    deleteTodo(todo) {
      this.$emit('delete', todo);
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 50rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.todo-delete {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  margin: 0rem 1rem;
}
</style>
