<template>
  <div class="container">
    <input type="text" name="title" id="title" v-model="newTodo" />
    <button id="add" @click="addNewTodo">Add todo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    addNewTodo() {
      this.$store.dispatch('addNewTodo', this.newTodo);
      this.newTodo = '';
      this.$router.push({ name: 'main-page' });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
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
