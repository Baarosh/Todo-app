<template>
  <section class="card">
    <div>
      <h4>ADD TODO</h4>
      <input type="text" name="filter" id="filter-text" v-model="todo.title" />
      <input type="button" name="addtodo" id="addtodo" value="Add todo" @click="addNewTodo" />
    </div>
  </section>
</template>

<script>
export default {
  emits: ['newitem'],
  data() {
    return {
      todo: {
        id: new Date().toISOString(),
        title: '',
        completed: false,
      },
    };
  },
  methods: {
    addNewTodo() {
      this.$emit('newitem', this.todo);
      this.$router.push({ name: 'HomePage' });
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
