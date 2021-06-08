<template>
  <div class="container">
    <input type="text" name="todo-title" id="todo-title" v-model="title" />
    <select name="todo-category" id="todo-category" v-model="category">
      <option value="null" disabled>--Select category--</option>
      <option value="Home">Home</option>
      <option value="Work">Work</option>
      <option value="Other">Other</option>
    </select>
    <button class="btn-success" id="add" @click="addNewTodo">Add todo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      category: 'null',
    };
  },
  methods: {
    addNewTodo() {
      this.$store.dispatch('addNewTodo', {
        title: this.title,
        category: this.category,
      });
      this.title = '';
      this.category = 'null';
      this.$router.push({ name: 'main-page' });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 80%;
  margin: 10px auto;
  ul {
    p {
    }
  }
}
</style>
