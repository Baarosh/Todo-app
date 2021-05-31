<template>
  <div class="container">
    <input type="text" name="todo-title" id="todo-title" v-model="title" />
    <select name="todo-category" id="todo-category" v-model="category">
      <option value="Home" selected="selected">Home</option>
      <option value="Work">Work</option>
      <option value="Other">Other</option>
    </select>
    <button id="add" @click="addNewTodo">Add todo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      category: 'Home',
    };
  },
  methods: {
    addNewTodo() {
      this.$store.dispatch('addNewTodo', {
        title: this.title,
        category: this.category,
      });
      this.title = '';
      this.category = '';
      this.$router.push({ name: 'main-page' });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  flex: 4;
  width: 50%;
  margin: 20px auto;
  background-color: plum;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;
  height: 200px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    p {
      display: inline-block;
    }
  }
}
</style>
